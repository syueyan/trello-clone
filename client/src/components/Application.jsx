import React from "react";
import { Route } from "react-router-dom";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import UISection from "./ui/UISection";
import AllBoards from "./ui/AllBoards";
import CardArchived from "./ui/CardArchived";
import CardEditingDescription from "./ui/CardEditingDescription";
import Card from "./ui/Card";
import CopyCardPopover from "./ui/CopyCardPopover";
import CreateBoard from "./ui/CreateBoard";
import DueDatePopover from "./ui/DueDatePopover";
import LabelsPopover from "./ui/LabelsPopover";
import MoveCardPopover from "./ui/MoveCardPopover";
import SingleBoard from "./ui/SingleBoard";
import Board from "./ui/Board"

/*
routers create unique URLs
routers allow users to move between components while preserving user state

the board component will be rendered in response to route /boards/:id
the board component will be responsible for:
  -parsing the URL for the id
  -sending a GET request to /api/boards/:id
  -dispatching an action to the store
  -render the board
*/

const Application = () => {
  return (
    <div>
      <TopNav />
      <Route path="/" exact component={BoardsDashboardContainer} />
      <Route path="/ui" exact component={UISection} />
      <Route path="/ui/allBoards" component={AllBoards} />
      <Route path="/boards/:id" component={Board} />
      <Route path="/ui/cardArchived" component={CardArchived} />
      <Route
        path="/ui/cardEditingDescription"
        component={CardEditingDescription}
      />
      <Route path="/ui/card" component={Card} />
      <Route path="/ui/copyCardPopover" component={CopyCardPopover} />
      <Route path="/ui/createBoard" component={CreateBoard} />
      <Route path="/ui/dueDatePopover" component={DueDatePopover} />
      <Route path="/ui/labelsPopover" component={LabelsPopover} />
      <Route path="/ui/moveCardPopover" component={MoveCardPopover} />
      <Route path="/ui/singleBoard" component={SingleBoard} />
    </div>
  );
};

export default Application;