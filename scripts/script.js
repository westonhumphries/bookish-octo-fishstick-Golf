$(function () {
  console.log("ready!");


  $.each(golfGames2, (ind, val) => {

    // console.log("index:", index);
    // console.log("value:", value);

    console.log(golfGames2[ind].game, val.game)

    let link = ''; 
    $.each(val.links, (i) => {
      link += `<a target="_blank" href=" ${ val.links[i] } " class="btn btn-primary"> ${ val.authors[i]} </a>`
      // link += k[i] ;

    })

    $("#gameRow").append(`
    <div class="col-sm-5 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${val.game} </h2>
          <div class="card-body"> Game Author: ${val.authors[0]}, ${val.authors[1]}, ${val.authors[2]}</div>
          <div class="card-footer">${ link } 
          </div>
        </div>
      </div>
      `);
  });
});