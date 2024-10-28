export const artGalleryDefaultQuery = {
  select: {
    id: true,
    name: true,
    bgImage: true,
    posX: true,
    posY: true,
    isOpen: true,
    location: true,
    openTime: true,
    endTime: true,
    lastOrder: true,
    ClosedDays: true,
    phoneNumber: true,
    callEmail: true,
    introduce: true,
    facebook: true,
    instagram: true,
    naverBlog: true,
    homepage: true,
    createdAt: true,
    updatedAt: true,
    mainArea: {
      select: {
        id: true,
        name: true,
      },
    },
    subArea: {
      select: {
        id: true,
        name: true,
      },
    },
    exhibitions: {
      where: {
        OR: [
          { status: 'EXHIBITING' as const },
          { status: 'UPCOMING' as const },
        ],
      },

      take: 10,
      select: {
        id: true,
        title: true,
        image: true,
        startDate: true,
        endDate: true,
      },
    },
  },
};
