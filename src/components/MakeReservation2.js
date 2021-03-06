import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import moment from 'moment';
import { createReservation } from '../actions/reservation';
import { unmountMakeReservation } from '../actions/reservation';
import { loadTours } from '../actions/tour';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

class MakeReservation extends React.Component {
  componentDidMount() {
    this.props.loadTours()
  }

  componentWillUnmount() {
    this.props.unmountMakeReservation()
  }

  findTour(tour_id, tours) {
    const tour = tours.find((tour) => tour.id === tour_id)
    return tour
  }

  handleSubmitReservation = (e) => {
    const reservationObj = {
      user_id: this.props.user.id,
      tour_id: parseInt(e.target.id)
    }

    this.props.createReservation(reservationObj)
    //loadTours to pessimistically render changes to tour reservations
    this.props.loadTours()
  }

  //Reduces tours to only future tours
  tourRow = (tours) => {
    return (tours.reduce((accum, tour) => {
      if (moment(tour.start_time) > moment()) {
        accum.push(
          <Grid.Column key={tour.id}>
            <Segment attached align='center'>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Header as='h3'>Title</Header>
              <p>{moment(tour.start_time).format("LLLL")}</p>
              <p>End: {moment(tour.end_time).format("h:hh a")}   Price: ${tour.price}</p>
              Reservations: {tour.reservations.length}
              <p>{tour.description}</p>
            </Segment>
            <Button
              attached='bottom'
              size='small'
              id={tour.id}
              onClick={this.handleSubmitReservation}
            >
              Book This Tour
            </Button>
          </Grid.Column>
        )
      }
        return accum;
      }, []))
  }

  render() {
    const {tours} = this.props

    return (
      <React.Fragment>
        <Header as='h2'textAlign='center'>Make a Reservation</Header>
        {this.props.successResponse && this.props.successResponse.tour && <Message
          success
          header={this.props.successResponse.message}
          />}
        <Header as='h3' attached='top' inverted textAlign='center'>Tours</Header>
          <Form
            success={!!this.props.successMessage}
            loading={this.props.makingReservation}
            >
          <Message
            success
            header={this.props.successMessage}
            content={!!this.props.confirmedTour ?
              "See you " + moment(this.props.confirmedTour.start_time).format("LLLL") + "!"
              :
              null
            }
            />
          <Grid padded stackable columns={3}>
            { tours && this.tourRow(tours) }
          </Grid>
        </Form>
    </React.Fragment>)
  }
}

const mapStateToProps = ({tours: { tours }, users: { user, loggedIn },
  reservations: { makingReservation, successMessage, confirmedTour }}) => ({
    tours,
    user,
    loggedIn,
    makingReservation,
    successMessage,
    confirmedTour
  })

export default withAuth(connect(mapStateToProps, { createReservation, loadTours, unmountMakeReservation })(MakeReservation));
