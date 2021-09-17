import React from "react";

interface IProps {
  urlKey: string;
}

function Share(props: IProps) {
  const url = `http://localhost:3000/events/${props.urlKey}`;
  return (
    <div>
      <h3>Share this URL:</h3>
      <a href={url}> {url} </a>
      <h3>This is the admin URL, keep this to yourself:</h3>
    </div>
  );
}

export default Share;
