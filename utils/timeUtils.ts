// utils/timeUtils.ts

export const timeSince = (dateString: string) => {
  const publishedDate = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - publishedDate.getTime()) / 1000);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} minutes ago`;
  } else if (seconds < 86400) {
    return `${Math.floor(seconds / 3600)} hours ago`;
  } else {
    return `${Math.floor(seconds / 86400)} days ago`;
  }
};
