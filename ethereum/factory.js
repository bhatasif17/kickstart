import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x11d7469f2E268513195A07eB0E7B74CF85d51816'
);

export default instance;
