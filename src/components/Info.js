import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {
          label: 'Dress code',
          open: false,
          content: this.dressCode.bind(this)
        },
        { label: 'Ceremony', open: false, content: this.ceremony.bind(this) },
        { label: 'Reception', open: false, content: this.reception.bind(this) },
        {
          label: 'Accomodation',
          open: false,
          content: this.accomodation.bind(this)
        },
        { label: 'Travel', open: false, content: this.travel.bind(this) },
        { label: 'Taxis', open: false, content: this.taxis.bind(this) }
      ]
    };
    this.placesToStay = [
      {
        title: 'Hotels',
        list: [
          {
            label: 'Barnsley House',
            area: 'Barnsley',
            phone: '01285 740000',
            website: 'barnsleyhouse.com',
            websiteLabel: 'barnsleyhouse.com',
            map: 'https://goo.gl/maps/nirjixk1CQU2'
          },
          {
            label: 'Kings Head Hotel',
            area: 'Cirencester',
            phone: '44 (0) 1285 700 900',
            website: 'kingshead-hotel.co.uk',
            websiteLabel: 'kingshead-hotel.co.uk',
            map: 'https://goo.gl/maps/md3sK32yPmA2'
          },
          {
            label: 'De Vere Cotswolds Water Park',
            area: 'Cirencester',
            phone: '+44 (0) 1285 864 000',
            website:
              'https://www.phcompany.com/de-vere/cotswold-water-park-hotel/?utm_source=google&utm_medium=local&utm_campaign=localSEO',
            websiteLabel: 'phcompany.com',
            map: 'https://goo.gl/maps/s8JhgGXK1vE2'
          },
          {
            label: 'Premier Inn',
            area: 'Cirencester',
            phone: '0871 527 9674',
            website:
              'https://www.premierinn.com/gb/en/hotels/england/gloucestershire/cirencester/cirencester.html',
            websiteLabel: 'premierinn.com',
            map: 'https://goo.gl/maps/7ru59K1u2PP2'
          },
          {
            label: 'The Fleece',
            area: 'Cirencester',
            phone: '+44 (0) 1285 650231',
            website:
              'https://www.thefleececirencester.co.uk/?utm_source=google&utm_medium=gmb',
            websiteLabel: 'thefleececirencester.co.uk',
            map: 'https://goo.gl/maps/ET87FTpWdjP2'
          },
          {
            label: 'The Bull Hotel',
            area: 'Fairford',
            phone: '+44 (0) 1285 712535',
            website: 'http://www.thebullhotelfairford.co.uk/',
            websiteLabel: 'thebullhotelfairford.co.uk',
            map: 'https://goo.gl/maps/zgjmTRZkHgB2'
          },
          {
            label: 'Travelodge',
            area: 'Cirencester',
            phone: '+44 (0) 871 984 6233',
            website:
              'https://www.travelodge.co.uk/hotels/86/Cirencester-hotel?WT.tsrc=GHA_Organic&utm_campaign=GHA_Cirencester&utm_medium=GHA_Organic&utm_source=google',
            websiteLabel: 'travelodge.co.uk',
            map: 'https://goo.gl/maps/VWQEt99eSK52'
          },
          {
            label: 'The Swan Hotel',
            area: 'Bibury',
            phone: '+44 (0) 1285 740695',
            website: 'https://www.cotswold-inns-hotels.co.uk/the-swan-hotel//',
            websiteLabel: 'cotswold-inns-hotels.co.uk',
            map: 'https://goo.gl/maps/TEjTH1BiD6L2'
          }
        ]
      },
      {
        title: 'Pubs with Rooms',
        list: [
          {
            label: 'The New Inn',
            area: 'Quenington',
            phone: '+44 (0) 1285 750651',
            website: 'http://www.new-inn.co.uk/',
            websiteLabel: 'new-inn.co.uk',
            map: 'https://goo.gl/maps/mGdCQupn9k32'
          },
          {
            label: 'The Hare and Hound',
            area: 'Foss Cross',
            phone: '+44 (0) 1285 720288',
            website: 'http://www.hareandhoundsinn.com/',
            websiteLabel: 'hareandhoundsinn.com',
            map: 'https://goo.gl/maps/P3q6x6KM5ez'
          },
          {
            label: 'The Masons Arms',
            area: 'Maysey Hampton',
            phone: '+44 (0) 1285 850164',
            website: 'http://www.masonsarmsmeyseyhampton.com/',
            websiteLabel: 'masonsarmsmeyseyhampton.com',
            map: 'https://goo.gl/maps/DRoNUamFXkn'
          },
          {
            label: 'The Keepers Arms',
            area: 'Quenington',
            phone: '+44 (0) 1285 750349',
            website: 'http://www.thekeepersarms.co.uk/',
            websiteLabel: 'thekeepersarms.co.uk',
            map: 'https://goo.gl/maps/GhEcJmXivKk'
          }
        ]
      },
      {
        title: 'B&Bs',
        list: [
          {
            label: 'The Old Brewhouse',
            area: 'Cirencester',
            phone: '+44 (0) 1285 656099',
            website: 'http://www.theoldbrewhouse.com/',
            websiteLabel: 'theoldbrewhouse.com',
            map: 'https://goo.gl/maps/8ArSae6A9bT2'
          },
          {
            label: 'Ivy House',
            area: 'Cirencester',
            phone: '+44 (0) 1285 656626',
            website: 'http://www.ivyhousecotswolds.com/',
            websiteLabel: 'ivyhousecotswolds.com',
            map: 'https://goo.gl/maps/yryQnX2M4Km'
          },
          {
            label: 'Corinium House',
            area: 'Cirencester',
            phone: '+44 (0) 1285 659711',
            website: 'https://www.coriniumhotel.com/',
            websiteLabel: 'coriniumhotel.com',
            map: 'https://goo.gl/maps/iAx6hUrFU8F2'
          }
        ]
      }
    ];
  }

  dressCode() {
    return (
      <div className="info-content">
        <p>
          Semi-formal &dash; You don&apos;t need to come all fancy, just make
          sure you&apos;ve got your dancing shoes on!
        </p>
        <p>
          It could get chilly at night, so make sure you bring something to
          throw on when the sun goes down.
        </p>
      </div>
    );
  }

  ceremony() {
    return (
      <div className="info-content">
        <p className="ceremony-details">
          <a href="https://goo.gl/maps/tbd7Z4wmJzF2" target="_blank">
            St. Mary&apos;s Church
          </a>
          <span>Fairford GL7 4AF</span>
          <a href="#">{svgIcon()}</a>
        </p>

        <p>
          Time: 1pm Kindly arrive by 12:50pm so there is enough time to say
          hello and be seated before the ceremony starts.
        </p>

        <p>
          We will be having an unplugged ceremony, so please resist the
          temptation of taking photos and videos. We know it&apos;s hard to stay
          away from your phone, but we promise it will only be for an hour!
          We&apos;ll be providing transport between St. Mary&apos;s and Cripps
          Barn once the ceremony ends, just let us know if you need a seat when
          you <a href="/rsvp">RSVP</a>.
        </p>
      </div>
    );
  }

  reception() {
    return <div className="info-content" />;
  }

  accomodation() {
    return (
      <div className="info-content">
        {this.placesToStay.map(places => (
          <div key={places.title}>
            <h3>{places.title}</h3>
            <div className="places-container">
              {places.list.map(place => (
                <Hotel key={place.map} data={place} />
              ))}
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }

  travel() {
    return <div className="info-content" />;
  }

  taxis() {
    return <div className="info-content" />;
  }

  toggleMenu(menuItem) {
    this.setState({
      menu: this.state.menu.map(item => {
        if (item.label === menuItem.label) {
          item.open = !item.open;
        }
        return item;
      })
    });
  }

  render() {
    return (
      <div className="info main-content">
        {this.state.menu.map(menuItem => {
          return (
            <div className="info-container" key={menuItem.label}>
              <div
                className="info-heading"
                onClick={() => this.toggleMenu(menuItem)}
              >
                <span>{menuItem.open ? '-' : '+'}</span>
                <h2>{menuItem.label}</h2>
              </div>
              {menuItem.open && menuItem.content()}
            </div>
          );
        })}
      </div>
    );
  }
}

const svgIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="24px"
      version="1.1"
      viewBox="0 0 512 512"
      width="24px"
      xmlSpace="preserve"
    >
      <g>
        <path d="M472.9,136.6L368.2,66.3c-4.6-3.1-10.4-3.1-15.1,0L256,131.5l-97.1-65.2c-4.6-3.1-10.5-3.1-15.1,0L39.1,136.6   c-4.4,2.9-7.1,8.3-7.1,14v281c0,5.9,2.8,11.3,7.4,14.3c4.6,2.9,10.3,2.8,14.8-0.2l97.1-65.2l97.1,65.2c4.7,3.1,10.4,3.1,15.1,0   l97.2-65.2l97.1,65.2c2.3,1.5,4.9,2.4,7.5,2.4c2.5,0,5-0.7,7.2-2.1c4.6-2.9,7.4-8.4,7.4-14.3v-281   C480,144.9,477.3,139.5,472.9,136.6z M135,353.2l-71,49.4V160.9l71-49.4V353.2z M167,352.8V230.4c1,0.7,2,1.3,2.9,2l9.3-13   c-3.8-2.7-8-5.3-12.2-7.5V111l73,49v108.7c-5.5-1.9-10.9-4.4-16.4-7.9l-8.5,13.6c6.8,4.3,13.6,7.5,20.7,9.8l4.2-12.8v130.3   L167,352.8z M272,401.7V288.3c0.2,0,0.4,0,0.5,0c2.9-0.2,5.8-0.5,8.5-0.9l-2.5-15.8c-2.1,0.3-4.3,0.6-6.6,0.7V160l73-49v119.2   l-5.3-4.8c-3,3.3-5.8,6.6-8.6,9.7c-1.8,2.1-3.6,4.1-5.3,6.1l12,10.6c1.8-2,3.6-4.1,5.4-6.2c0.6-0.7,1.2-1.4,1.9-2.1v109.2   L272,401.7z M448,401.7l-71-48.4V216.1c3.6-1.6,7.4-2.8,11.1-3.6l-3.2-15.7c-2.7,0.5-5.3,1.3-8,2.1v-87.5l71,48.5V401.7z" />
        <path d="M98.9,256c1.9-5.9,3.5-11,7.1-16.3l-13.2-9c-4.9,7.2-7.1,13.9-9.2,20.5l-0.2,0.8l15.2,4.9L98.9,256z" />
        <path d="M128.8,221.1c2.2-1.2-1.4-1.1,1-1.8l-4.9-15.2c-3.3,1.1-6.5,2.4-9.6,4.1c-3.8,2.1-7.7,4.9-11.3,8.3l10.9,11.7   C117.5,225.7,126.1,222.5,128.8,221.1z" />
        <path d="M296.3,266.1l7,14.4c6.6-3.2,12.8-7.4,19.1-13l-10.6-12C306.6,260.1,301.6,263.6,296.3,266.1z" />
        <path d="M197.8,237.8c-1-1.2-2-2.4-3-3.6l-12.2,10.4c1,1.2,2,2.3,2.9,3.5c3.6,4.3,7.3,8.7,11.6,12.8l11-11.6   C204.5,245.8,201.3,241.9,197.8,237.8z" />
        <polygon points="407.7,229.7 418,219.3 428.3,229.7 439.7,218.3 429.3,208 439.7,197.7 428.3,186.3 418,196.7    407.7,186.3 396.3,197.7 406.7,208 396.3,218.3  " />
      </g>
    </svg>
  );
};

class Hotel extends Component {
  render() {
    return (
      <div>
        <div className="hotel-content">
          <h4>{this.props.data.label}</h4>
          <div>
            <span>{this.props.data.area}</span>
            {svgIcon()}
          </div>
          <a href={'tel:' + this.props.data.phone}>{this.props.data.phone}</a>
          <a href={this.props.data.website}>{this.props.data.websiteLabel}</a>
        </div>
      </div>
    );
  }
}

export default Info;
