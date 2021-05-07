import React from "react";
import { formatDistance, formatRelative, formatDistanceToNow } from "date-fns";

export const TimeStamp = ({ timestamp, ...otherProps }) => {
  const questionData = new Date(timestamp);
  const currentDate = new Date();
  const questionDataMS = questionData.getTime();
  const currentDateMS = currentDate.getTime();
  const dateDiff = Math.floor(
    (currentDateMS - questionDataMS) / (1000 * 60 * 60 * 24)
  );

  return (
    <span {...otherProps}>
      {dateDiff < 1
        ? formatDistance(questionData, new Date(), {
            addSuffix: true,
          })
        : dateDiff < 7
        ? formatRelative(questionData, new Date())
        : formatDistanceToNow(questionData) + " ago"}
    </span>
  );
};
