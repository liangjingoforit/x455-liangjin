  // begin added for sortable
  $(document).ready(function () {
    $("table#myTable").tablesorter({
      sortList: [
        [2, 1],
      ] /* 1st number - column to sort, 2nd number - asending (2) or descending order (1) */,
      CssAsc: "tablesorter-headerAsc",
      CssDesc: "tablesorter-headerDesc",
    });
  });
  // end added for sortable
