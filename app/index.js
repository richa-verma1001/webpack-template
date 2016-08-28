import '../css/base.less';
import config from '../data/config.json';

console.log('Hello Webpack from browser!');

class Log {

  constructor() {
      console.log(config.msg);
  }

}

new Log();
