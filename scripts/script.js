$(function () {
  console.log("ready!");

  $.each(golfGames, (index) => {

    // console.log("index:", index);
    // console.log("value:", value);


    $("#gameRow").append(`
    <div class="col-sm-5 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${golfGames[index].game} </h2>
          <div class="card-body">${golfGames[index].author}</div>
          <div class="card-footer">
          <a target="_blank" href="${golfGames[index].Link}" class="btn btn-primary">Game 1</a>
          <a target="_blank" href="${golfGames[index].Link2}" class="btn btn-primary">Southern Game</a>
          <a target="_blank" href="${golfGames[index].Link3}" class="btn btn-primary">Stokes Game</a>
          </div>
        </div>
      </div>
      `);
  });
});
