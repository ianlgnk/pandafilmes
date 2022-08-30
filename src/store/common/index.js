import { Store } from "@/plugins";

import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { states } from "./states";

Store.registerModule("common", {
  states,
  getters,
  actions,
  mutations,
});
