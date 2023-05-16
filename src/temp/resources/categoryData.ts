import { CategoryItemType } from "@/types/template/header/categoryItem.type";

export const categoryData: CategoryItemType[] = [
  {
    id: '1e76a7e5-097b-4a4e-b74c-7b57206363db',
    name: 'مانتیور',
    parent: null,
    page_url: 'a_a',
    children: [
      {
        id: 'af03f2de-a5da-42b5-9906-381eba96d61b',
        name: 'زیر شاخه مانیتور',
        parent: '1e76a7e5-097b-4a4e-b74c-7b57206363db',
        children: [],
        picture_link: false,
        page_url: 'b_a',
      },
    ],
    picture_link:
      'https://cdn.mobit.ir/get/mobit/menu/1058/60c6fb4a6a949.svg?inline=1',
  },
  {
    id: '359f81c9-6a5f-4aa4-a715-65b146cdabde',
    name: 'مشت باقر',
    parent: null,
    page_url: 'a_b',
    children: [
      {
        id: '180713b5-d9a0-4a2e-bc50-7b382abe4ab0',
        name: 'زیر شاخه لپتاب',
        parent: '359f81c9-6a5f-4aa4-a715-65b146cdabde',
        page_url: 'b_b',
        children: [
          {
            id: 'f778f0e2-db52-4fa4-b7e7-9d177d475380',
            name: 'زیر شاخه لول 3',
            parent: '180713b5-d9a0-4a2e-bc50-7b382abe4ab0',
            page_url: 'c_a',
            children: [],
            picture_link: false,
          },
        ],
        picture_link: false,
      },
    ],
    picture_link:
      'https://cdn.mobit.ir/get/mobit/menu/1058/60c6fb4a6a949.svg?inline=1',
  },
  {
    id: 'a06b2d06-c613-44d2-ab44-e94088c5c2c3',
    name: 'کشسرات',
    parent: null,
    page_url: 'a_c',
    children: [
      {
        page_url: 'b_c',
        id: 'ce1435a2-8e13-40bf-a927-c6440b6418a8',
        name: 'زیر شاخه کسشرات',
        parent: 'a06b2d06-c613-44d2-ab44-e94088c5c2c3',
        children: [],
        picture_link: false,
      },
    ],
    picture_link:
      'https://cdn.mobit.ir/get/mobit/menu/1058/60c6fb4a6a949.svg?inline=1',
  },
  {
    id: '2ee4211d-64cb-47dc-bfa9-4f369a613822',
    name: 'گوشی',
    parent: null,
    page_url: 'a_d',
    children: [
      {
        page_url: 'b_d',
        id: '9856b230-184e-4c54-b3d2-d4dc27478aed',
        name: 'زیر شاخه گوشی',
        parent: '2ee4211d-64cb-47dc-bfa9-4f369a613822',
        children: [
          {
            page_url: 'c_b',
            id: '692ee9cd-0a0d-4088-b7af-294d4f0e27a9',
            name: 'زیر شاخه لول 3 گوشی',
            parent: '9856b230-184e-4c54-b3d2-d4dc27478aed',
            children: [],
            picture_link: false,
          },
        ],
        picture_link: false,
      },
    ],
    picture_link:
      'https://cdn.mobit.ir/get/mobit/menu/1058/60c6fb4a6a949.svg?inline=1',
  },
];
