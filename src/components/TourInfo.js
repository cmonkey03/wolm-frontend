import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react';
// import { Transition } from 'react-spring';

const src1 = '/fraunces-tavern.jpg'
const src2 = '/collect-pond.png'

const TourInfo = () => (
  <React.Fragment>
  {/*<Transition
    items={show}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}>
    {show =>
      show && (props => <div style={props}>✌️</div>)
    }
  </Transition>
*/}
  <Segment>
    <Header as='h1'>The year is 1780...</Header>
    <Image src={src1} size='medium' floated='left' />
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
      est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
      ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
    <Image src={src2} size='medium' floated='right' />
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
      nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
      fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
      adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
      utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
      convenire mnesarchum eu per, quas minimum postulant per id.
    </p>
    <p>
      Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
      nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
      fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
    </p>
    <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
      est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
      ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
  </Segment>
  </React.Fragment>
)

export default TourInfo
