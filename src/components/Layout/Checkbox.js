import React from "react";
import { db } from "../../firebase";

export const Checkbox = ({ id }) => {
  const archiveTasks = () => {
    db.collection("tasks").doc(id).update({
      archived: true,
    });
  };
  return (
    <div
      className="checkbox__holder"
      data-testid="checkbox__action"
      onClick={() => archiveTasks()}
    >
      <span className="checkbox" />
    </div>
  );
};
