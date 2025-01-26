function skillsMember() {
    // Get the member id from the URL
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);

    // Get the member's skills
    $.ajax({
        type: 'GET',
        url: '/api/members/' + id + '/skills',
        success: function(data) {
            // Display the skills
            var skills = data.skills;
            var skillList = $('#skillsList');
            skillList.empty();
            for (var i = 0; i < skills.length; i++) {
                var skill = skills[i];
                var skillItem = $('<li>').text(skill.skill);
                skillList.append(skillItem);
            }
        }
    });
}