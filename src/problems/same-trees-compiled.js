/**
 * Created by enrique.munguia on 10/12/16.
 */

/*
 Check if two binary trees have the same structure and values

 Complexity
 Time: O(n + m)
 Space: O(h1 + h2)
 */
function sameTrees(treeA, treeB) {
  if (!treeA && !treeB) return true;
  if (!treeA || !treeB || treeA.data !== treeB.data) return false;

  return sameTrees(treeA.left, treeB.left) && sameTrees(treeA.right, treeB.right);
}

//# sourceMappingURL=same-trees-compiled.js.map