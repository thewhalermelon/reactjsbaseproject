import { deepCopy } from '../../../utils/utilities';
import BodyItemModel from './BodyItemModel';

export default class AccordionModel {
  constructor() {
    this['header'] = '';

    this['body'] = [];
  }

  getData(dataSource) {
    if (dataSource && Object.prototype.hasOwnProperty.call(dataSource, 'header')) {
      this.header = dataSource.header ?? this.header;
    }

    if (dataSource && Object.prototype.hasOwnProperty.call(dataSource, 'body')) {
      let newList = [];

      dataSource['body'].map((ele) => {
        return newList.push(new BodyItemModel().getData(deepCopy(ele) || {}));
      });

      this['body'] = newList;
    }

    return this;
  }
}
