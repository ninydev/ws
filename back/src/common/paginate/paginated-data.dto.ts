import { Paginated } from 'nestjs-paginate';

export class PaginatedData<RawData, MappedData> {
  data: MappedData[];
  meta: Paginated<RawData>['meta'];

  constructor({
    data,
    meta,
  }: {
    data: MappedData[];
    meta: Paginated<RawData>['meta'];
  }) {
    this.data = data;
    this.meta = meta;
  }
}
