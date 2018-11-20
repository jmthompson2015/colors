import ActionCreator from "./ActionCreator.js";
import ActionType from "./ActionType.js";

QUnit.module("ActionCreator");

QUnit.test("all action types", assert => {
  // Setup.
  const actionTypeKeys = Object.getOwnPropertyNames(ActionType);
  assert.equal(actionTypeKeys.length, 1);

  // Run / Verify.
  actionTypeKeys.forEach(key => {
    assert.ok(ActionCreator[ActionType[key]], `actionType = ${key} ${ActionType[key]}`);
  });
});

QUnit.test("setColor()", assert => {
  // Setup.
  const color = 3;

  // Run.
  const result = ActionCreator.setColor(color);

  // Verify.
  assert.ok(result);
  assert.equal(result.type, ActionType.SET_COLOR);
  assert.equal(result.color, color);
});

const ActionCreatorTest = {};
export default ActionCreatorTest;
