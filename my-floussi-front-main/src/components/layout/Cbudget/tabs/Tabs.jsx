import { useCallback, useState } from "react";
import Header from "./Header";
import Tab from "./Tab";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { handleDragItemOfGroup } from "../../../../utils/drag/drop";
import {
  addDepencesGroup,
  addGroup,
  editDepencesElementData,
  editInvistissmentElementData,
  editRevenuGroupItems,
  setDepences,
  setInvestissements,
} from "../../../../redux/calculateurBudjetSlice";
import { useDispatch, useSelector } from "react-redux";
import { reOrder } from "../../../../utils/reorder";

// eslint-disable-next-line react/prop-types
const Tabs = ({ sankeyRef }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const ajouterCategorie = (type) => {
    switch (type) {
      case "investissements":
        dispatch(addGroup());
        break;

      case "depences":
        dispatch(addDepencesGroup());

      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  };

  const { investissements, revenus, depences } = useSelector(
    (state) => state.calculateurBudjet,
  );

  const handleDragEnd = (results) => {
    const { source, destination, type, draggableId } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const srcIndex = source.index;
    const destIndex = destination.index;

    const srcId = source.droppableId;
    const destId = destination.droppableId;

    if (type === "investissement" || type === "depences") {
      switch (type) {
        case "investissement":
          // eslint-disable-next-line no-case-declarations
          const newInvs = reOrder(investissements, srcIndex, destIndex);
          dispatch(setInvestissements(newInvs));
          break;
        case "depences":
          // eslint-disable-next-line no-case-declarations
          const nesDeps = reOrder(depences, srcIndex, destIndex);
          dispatch(setDepences(nesDeps));
          break;
        default:
          break;
      }
      return;
    }
    switch (value) {
      case 1:
        // eslint-disable-next-line no-case-declarations
        const [invSrcItems, invDestItems, invGroupSrcIndex, invGroupDestIndex] =
          handleDragItemOfGroup(
            investissements,
            srcId,
            destId,
            srcIndex,
            destIndex,
            draggableId,
          );
        dispatch(
          editInvistissmentElementData({
            groupIndex: invGroupSrcIndex,
            data: invSrcItems,
          }),
        );
        dispatch(
          editInvistissmentElementData({
            groupIndex: invGroupDestIndex,
            data: invDestItems,
          }),
        );
        break;
      case 2:
        // eslint-disable-next-line no-case-declarations
        const [depSrcItems, depDestItems, depGroupSrcIndex, depGroupDestIndex] =
          handleDragItemOfGroup(
            depences,
            srcId,
            destId,
            srcIndex,
            destIndex,
            draggableId,
          );
        dispatch(
          editDepencesElementData({
            groupIndex: depGroupSrcIndex,
            data: depSrcItems,
          }),
        );
        dispatch(
          editDepencesElementData({
            groupIndex: depGroupDestIndex,
            data: depDestItems,
          }),
        );
        break;

      default:
        // eslint-disable-next-line no-case-declarations
        const newRevs = reOrder(revenus, srcIndex, destIndex);
        dispatch(editRevenuGroupItems(newRevs));
        break;
    }
  };

  const goToNextAction = useCallback(() => {
    value < 2
      ? setValue((v) => v + 1)
      // eslint-disable-next-line react/prop-types
      : sankeyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [value]);

  return (
    <div className="mx-12  h-fit">
      <Header v={value} setV={setValue} />

      <DragDropContext
        className="flex justify-center"
        onDragEnd={handleDragEnd}
      >
        {value === 0 && <Tab type="revenus" data={revenus} />}
        {value === 1 && (
          <Droppable droppableId={"ROOT_invs"} type="investissement">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {investissements.map((inv, i) => (
                  <Draggable draggableId={inv.id} key={inv.id} index={i}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Tab
                          type="investissements"
                          data={inv}
                          dataLength={investissements.length}
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
        )}

        {value === 2 && (
          <Droppable droppableId={"ROOT_deps"} type="depences">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {depences.map((dep, i) => (
                  <Draggable draggableId={dep.id} key={dep.id} index={i}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <Tab
                          type="depences"
                          data={dep}
                          dataLength={depences.length}
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
        )}
      </DragDropContext>

      {value !== 0 && (
        <div className="w-[100%] h-fit flex justify-center   mx-auto">
          <button
            onClick={() => {
              const type = value === 1 ? "investissements" : "depences";
              ajouterCategorie(type);
            }}
            className="text-black text-lg font-bold 	
                    opacity-60
                     w-50 h-30 px-4 py-2 mr-5 rounded-xl hover:opacity-80
                     transition duration-150 ease-in-out"
          >
            Ajouter une catégorie +
          </button>
        </div>
      )}

      <div className=" flex justify-end h-fit w-[100%] my-4 px-2">
        <button
          onClick={goToNextAction}
          className=" bg-mainLight
                     text-white rounded-3xl w-[210px]
                      h-[50px] shadow-md px-2 py-4 text-center align-middle text-lg flex items-center justify-center hover:shadow-lg transition-all 
                      duration-300 uppercase"
        >
          {" "}
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Tabs;
