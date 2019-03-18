import React, { Fragment } from "react";

import { TouchableHighlight } from "react-native";

import ListItem from "./list-item";


function List ({ list, removeTodo, }) {
  return (
    <Fragment>
      {
        list.map((item) => (
          <TouchableHighlight>
            <ListItem
              removeTodo={removeTodo}
              item={item} />
          </TouchableHighlight>
        ))
      }
    </Fragment>
  );
}

export default List;
