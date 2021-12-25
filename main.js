var options = [
    { data: 'rodney_chris',     value: 'Rodney Chris' },
    { data: 'monte_fannie',     value: 'Monte Fannie' },
    { data: 'charisma_marina',  value: 'Charisma Marina' },
    { data: 'rachelle_gloria',  value: 'Rachelle Gloria' },
    { data: 'roz_caden',        value: 'Roz Caden' },
    { data: 'kirby_roselyn',    value: 'Kirby Roselyn' },
    { data: 'dominica_dorine',  value: 'Dominica Dorine' },
    { data: 'ebony_tamzen',     value: 'Ebony Tamzen' },
    { data: 'lizette_madeline', value: 'Lizette Madeline' },
    { data: 'roland chanel',    value: 'Roland Chanel' },
];

$(function () {
    $('.autocomplete').autocomplete({
        lookup: options,
        onSelect: function (suggestion) {
            $('#selected_option').html(suggestion.value);
        },
    });
});