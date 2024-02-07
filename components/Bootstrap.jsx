import React, { useEffect } from "react";

export default function Bootstrap() {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return null;
}
