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
                        notice: 'Ce contenu est hébergé par Google Ireland Limited.<br>En affichant le contenu externe, vous acceptez <a rel="noreferrer" href="https://www.youtube.com/t/terms" title="Conditions d\'Utilisation" target="_blank">les CGU</a> de youtube.com.',
                        loadBtn: 'Accepter et charger la vidéo',
                        loadAllBtn: 'Toujours accepter'
                    }
                }
            }
        }
    });
});