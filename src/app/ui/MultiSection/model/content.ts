import picture1 from '../../../images/home-page/producer/healthyPeople1.png';
import picture2 from '../../../images/home-page/producer/healthyPeople2.png';
import picture3 from '../../../images/home-page/producer/healthyPeople3.png';
import picture4 from '../../../images/home-page/producer/healthyPeople4.png';
import picture9 from '../../../images/home-page/service/healthyPeoples1.png';
import picture10 from '../../../images/home-page/service/healthyPeoples2.png';
import picture11 from '../../../images/home-page/service/healthyPeoples3.png';
import picture12 from '../../../images/home-page/service/healthyPeoples4.png';
import picture5 from '../../../images/home-page/veterinarian/healthyPeoples1.png';
import picture6 from '../../../images/home-page/veterinarian/healthyPeoples2.png';
import picture7 from '../../../images/home-page/veterinarian/healthyPeoples3.png';
import picture8 from '../../../images/home-page/veterinarian/healthyPeoples4.png';

const content = {
  producer: {
    text: `Biosecurity is the cheapest way to keep your
    plants and animals healthy. We provide the farm management tool that helps you to be always connected with your veterinarian. You will daily control key parameters of your productions,
    prevent and quickly react to challenges related
    to animal health.`,

    list: [
      'Rapid interaction with the veterinarian and other biosecurity stakeholders.',
      'Control of the main indicators that reflect the state of healthof animals (plants).',
      'A convenient and fast way to order veterinary drugs and feed.',
      'Regular assessment of the state of biosecurity on the farm.',
    ],

    pictures: [
      { alt: 'Healthy people 1', url: picture1 },
      { alt: 'Healthy people 2', url: picture2 },
      { alt: 'Healthy people 3', url: picture3 },
      { alt: 'Healthy people 4', url: picture4 },
    ],
  },
  veterinarian: {
    text: `We organize effective communication between
    you and your customers. We save your time
    on driving and down time for customer visits
    to allow you to do more important tasks.`,

    list: [
      ' Virtual farm visits. Save on long driving and downtime between the visits.',
      'Convenient customer database.',
      'Quick communication with managers (owners) of the farm.',
      'A convenient interface for processing customer requests.',
      'Data protection.',
    ],

    pictures: [
      { alt: 'Healthy people 5', url: picture5 },
      { alt: 'Healthy people 6', url: picture6 },
      { alt: 'Healthy people 7', url: picture7 },
      { alt: 'Healthy people 8', url: picture8 },
    ],
  },

  serviceProvider: {
    text: `We allow you to quickly understand customers' needs. Save your and customers
    time and money.`,

    list: [
      'Quick and convenient communication with the client.',
      'A convenient interface for tracking customers service requests and their fulfillment.',
      "Providing information about the farm's status and biosecurity requirements on it.",
    ],

    pictures: [
      { alt: 'Healthy people 9', url: picture9 },
      { alt: 'Healthy people 10', url: picture10 },
      { alt: 'Healthy people 11', url: picture11 },
      { alt: 'Healthy people 12', url: picture12 },
    ],
  },
};

export { content };
