export default class BodyItemModel {
  constructor() {
    this['title'] = '';

    this['subtitle'] = '';

    this['content'] = [];

    this['projects'] = [];
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

    if (dataSource && Object.prototype.hasOwnProperty.call(dataSource, 'projects')) {
      this.projects = dataSource.projects ?? this.projects;
    }

    return this;
  }
}
