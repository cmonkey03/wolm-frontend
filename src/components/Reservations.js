import React from 'react';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux';
import moment from 'moment';
import { cancelReservation } from '../actions/reservation';
import { loadTours } from '../actions/tour';
import { fetchCurrentUser } from '../actions/user';
import {
  Button,
  Header,
  Form,
  Message,
  Table
} from 'semantic-ui-react';

class Reservations extends React.Component {

  reservationRow = (reservations) => {
    return (reservations.reduce((accum, reservation) => {
      if (moment(reservation.tour.start_time) > moment()) {
          accum.push(<Table.Row key={reservation.id}>
            <Table.Cell textAlign='center'><Button size='small' onClick={this.handleCancelReservation} name={reservation.id}>Cancel</Button></Table.Cell>
            <Table.Cell>{moment(reservation.tour.start_time).format("LLLL")}</Table.Cell>
            <Table.Cell>{moment(reservation.tour.end_time).format("LLL")}</Table.Cell>
            <Table.Cell>{reservation.tour.price}</Table.Cell>
          </Table.Row>)
        }
      return accum;
    }, []))
  }

  handleCancelReservation = (e) => {
    const reservationObj = { id: e.target.name }
    this.props.cancelReservation(reservationObj)
    //loadTours to pessimistically render changes to tour reservations
    this.props.loadTours()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.successResponse && !this.props.successResponse.tour && <Message success header={this.props.successResponse.message}/>}
        <Header as='h3' attached='top' inverted textAlign='center'>Your Reservations</Header>
        <Form
          loading={this.props.cancellingReservation}
        >
          <Table celled attached>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Select Tour</Table.HeaderCell>
                <Table.HeaderCell>Start Time</Table.HeaderCell>
                <Table.HeaderCell>End Time</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.props.user.reservations && this.reservationRow(this.props.user.reservations) }
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>
                  {/*<Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left'/>
                    </Menu.Item>
                    <Menu.Item as='a' name='1'/>
                    <Menu.Item as='a' name='2'/>
                    <Menu.Item as='a' name='3'/>
                    <Menu.Item as='a' name='4'/>
                    <Menu.Item as='a' name='5'/>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right'/>
                    </Menu.Item>
                  </Menu>*/}
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ users: { user, loggedIn },
  reservations: { cancellingReservation }}) => ({
    user,
    loggedIn,
    cancellingReservation
})

export default withAuth(connect(mapStateToProps, { cancelReservation, fetchCurrentUser, loadTours })(Reservations));
