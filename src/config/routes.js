/* @flow */
import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";

import MasterLayout from "../components/MasterLayout";
import HomeApp from "../containers/HomeApp";
import MovieApp from "../containers/MovieApp";
import ActorApp from "../containers/ActorApp";
import NoMatchApp from "../containers/NoMatchApp";

// Demos
import DemoApp from "../containers/DemoApp";
import MovieDemo from "../components/demo/MovieDemo";
import ActorDemo from "../components/demo/ActorDemo";

export default function routes (/*store:Object*/) {
  return (
    <Route component={MasterLayout} path="/">
      <IndexRoute component={HomeApp} />

      <Route path="movies/:id" component={MovieApp} />
      <Route path="actors/:id" component={ActorApp} />

      <Route path="demos" component={DemoApp}>
        <Route path="movie" component={MovieDemo} />
        <Route path="actor" component={ActorDemo} />
      </Route>

      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp} />
    </Route>
  );
}

