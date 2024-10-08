export const formatDate = (comment) => {
  const dateStr = comment.created_at;
  const dateObj = new Date(dateStr);
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  return formattedDate;
};

export const formatTime = (comment) => {
  const dateStr = comment.created_at;
  const dateObj = new Date(dateStr);
  const formattedTime = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formattedTime;
};

export const daysAgo = (dateString) => {
  const passedDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - passedDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};
