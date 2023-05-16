export type CategoryItemType = {
  id: string;
  name: string;
  parent: string | null;
  page_url: string;
  picture_link: string | false;
  children: CategoryItemType[];
};
