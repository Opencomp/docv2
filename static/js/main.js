window.addEventListener('load', function(){

    var manager = iframemanager();
    
    // Example with youtube embed
    manager.run({
        currLang: 'fr',
        services : {
            youtube : {
                embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}?autoplay=1&modestbranding=1&rel=0&color=white&showinfo=0',
                thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',
                iframe : {
                    allow : 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
                    // function run for each iframe configured with current service
                    onload : function(data_id, setThumbnail){
                        console.log("loaded iframe with data-id=" + data_id);
                    }
                },
                cookie : {
                    name : 'cc_youtube'
                },
                languages : {
                    fr : {
                        notice: 'Ce contenu est hébergé par Google Ireland Limited.<br>En affichant le contenu externe, vous acceptez <a rel="noreferrer" href="https://www.youtube.com/t/terms" title="Conditions d\'Utilisation" target="_blank">les CGU</a> de youtube.com',
                        loadBtn: 'Accepter et charger la vidéo',
                        loadAllBtn: 'Toujours accepter'
                    }
                }
            },
            vimeo : {
                embedUrl: 'https://player.vimeo.com/video/{data-id}?autoplay=1',

                thumbnailUrl: function(id, setThumbnail){
                
                    var url = "https://vimeo.com/api/v2/video/" + id + ".json";
                    var xhttp = new XMLHttpRequest();
                    
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            var src = JSON.parse(this.response)[0].thumbnail_large;
                            setThumbnail(src);
                        }
                    };

                    xhttp.open("GET", url, true);
                    xhttp.send();
                },
                iframe : {
                    allow : 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
                },
                cookie : {
                    name : 'cc_vimeo'
                },
                languages : {
                    fr : {
                        notice: 'Ce contenu est hébergé par Vimeo.com, Inc.<br>En affichant le contenu externe, vous acceptez <a rel="noreferrer" href="https://vimeo.com/terms" title="Conditions d\'Utilisation" target="_blank">les CGU</a> de vimeo.com',
                        loadBtn: 'Accepter et charger la vidéo',
                        loadAllBtn: 'Toujours accepter'
                    }
                }
            }
        }
    });
});