import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDepence,
  addInvitissement,
  addRevenu,
  changeGroupTitle,
  deleteGroup,
} from "../../../../redux/calculateurBudjetSlice";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Form from "../Form";
import TabHeader from "./TabHeader";
import TabFooter from "./TabFooter";
import uuid from "react-uuid";

const Tab = ({ data, type, dataLength }) => {
  const _data = type === "revenus" ? data : data.data;
  const titleRef = useRef(null);
  const [title, setTitle] = useState(data.title);

  const dispatch = useDispatch();
  const addItem = useCallback(() => {
    switch (type) {
      case "investissements":
        dispatch(
          addInvitissement({
            groupId: data.id,
            id: uuid(),
            nom: "",
            montant: 0,
            type: "m",
          }),
        );
        break;
      case "depences":
        dispatch(
          addDepence({
            groupId: data.id,
            id: uuid(),
            nom: "",
            montant: 0,
            type: "m",
          }),
        );
        break;
      default:
        dispatch(addRevenu({ id: uuid(), nom: "", montant: 0, type: "m" }));
        break;
    }
  }, [type]);

  const _deleteGroup = () => {
    dispatch(deleteGroup({ type, groupId: data.id }));
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onKeyUpGrpTitleChange = () => {
    dispatch(
      changeGroupTitle({
        title,
        groupId: data.id,
        type,
      }),
    );
  };
  return (
    <div className=" h-fit w-full rounded-2xl bg-white border border-grayExtraLight shadow-sm mt-3">
      <TabHeader
        dataLength={dataLength}
        deleteGroup={_deleteGroup}
        titleRef={titleRef}
        type={type}
        title={title}
        onChange={changeTitle}
        onKeyUp={onKeyUpGrpTitleChange}
      />

      {
        <Droppable droppableId={data.id ?? "###"} type="form">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {_data.map((r, i) => (
                <Draggable draggableId={r.id} key={r.id} index={i}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <Form
                        type={type}
                        key={r.id}
                        groupId={data.id}
                        id={r.id}
                        dataLength={_data.length}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      }

      <TabFooter type={type} addItem={addItem} />
    </div>
  );
};

export default Tab;
