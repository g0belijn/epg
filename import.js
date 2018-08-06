function generateBroadcastView() {
  $('#EPGTable').empty();
  $.getJSON( "files/epg.json", function( json ) {
    var viewHTML = "<table><tr><td>start</td><td>stop</td><td>title</td><td>channel</td><td>type</td></tr>";
    $.each(json.response.broadcasts, function( key, value ) {
      viewHTML += broadcastsRow(value.start.display, value.stop.display, value.episode.title, value.channel, value.episode.number);
    });
    $('#EPGTable').append(viewHTML);
  });

}

function broadcastsRow(start_time, end_time, episode, channel, episodenr) {
  var type = "Episode";
  if (episodenr == null) {
    if (episode == "Geen Uitzending" || episode == "Qmusic" ) {
      type = "Undefined";
    }
    else {
      type = "Movie";
    }
  }

  return '<tr><td>' + start_time + '</td><td>' + end_time + '</td><td>' + episode + '</td><td>' + channel +  '</td><td>'+ type +'</td></tr>';
}
