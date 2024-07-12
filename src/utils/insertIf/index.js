/**
 * Helper function to enable the following syntax:
 *
 * [
 *   itemA,
 *   itemB,
 *   ...arrayInsertIf(condition, [conditionalItemC, conditionalItemD])
 * ]
 */
function arrayInsertIf(condition, items) {
    return condition ? items : [];
}
/**
 * Helper function to enable the following syntax:
 *
 * {
 *   a: 0,
 *   b: 1,
 *   ...objectInsertIf(someCondition, { conditionalItemC: 2, conditionalItemD: 3 })
 * }
 */
function objectInsertIf(condition, item) {
    return condition ? item : null;
}
export { arrayInsertIf, objectInsertIf };
