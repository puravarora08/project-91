function addUser()
{
    player1_name = document.getElementById("first_player_name").value;
    player2_name = document.getElementById("second_player_name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "quiz_game_page.html";
}
