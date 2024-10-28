export const exhibitionDefaultQuery = {
  select: {
    id: true,
    title: true,
    image: true,
    startDate: true,
    endDate: true,
    status: true,
    introduce: true,
    genre: true,
    artists: true,
    createdAt: true,
    updatedAt: true,
    artGallery: {
      select: {
        id: true,
        name: true,
      },
    },
  },
};
