export default class BodyItemModel {
  constructor() {
    this['title'] = '';

    this['subtitle'] = '';

    this['content'] = [];
  }

  getData(dataSource) {
    if (dataSource && Object.prototype.hasOwnProperty.call(dataSource, 'title')) {
      this.title = dataSource.title ?? this.title;
    }

    if (dataSource && Object.prototype.hasOwnProperty.call(dataSource, 'subtitle')) {
      this.subtitle = dataSource.subtitle ?? this.subtitle;
    }

    if (dataSource && Object.prototype.hasOwnProperty.call(dataSource, 'content')) {
      this.content = dataSource.content ?? this.content;
    }

    return this;
  }
}
