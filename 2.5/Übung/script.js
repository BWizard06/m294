
//Extra Funktion Button zum ändern der Hintergrundfarbe
document.addEventListener('DOMContentLoaded', () => {
        function changeEverything() {
            
            //HTML Änderungen
        //1. Ändern Sie den Namen eines bestehenden Albums
        document.getElementsByTagName("h2")[0].innerHTML = "Album1";
        //2. Ändern Sie den Track-Namen sowie die Track Zeit eines bestehenden Albums
        const album1 = document.getElementsByTagName("ol")[0];
        album1.getElementsByTagName("li")[0].innerHTML = "Changed Song (3:18)";
        //document.getElementsByTagName("li")[7].innerHTML = "Song1 (3:18)";
        //3. Löschen Sie einen Track eines bestehenden Albums
        album1.getElementsByTagName("li")[3].remove();
        //4. Löschen Sie ein bestehendes Album
        const deleteAlbumTitle = document.getElementsByTagName("h2")[1];
        deleteAlbumTitle.remove();
        const album2 = document.getElementsByTagName("ol")[1];
        album2.remove();
        //5. Fügen Sie einen neuen Track zu einem bestehenden Album hinzu
        let newTrack = document.createElement("li");
        newTrack.innerHTML = "Added Song (4:20)";
        album1.append(newTrack);
        //6. Fügen Sie ein neues Album hinzu
        let newAlbum = document.createElement("h2");
        newAlbum.innerHTML = "Album3";
        album1.after(newAlbum);
        let newAlbumList = document.createElement("ol");
        newAlbum.after(newAlbumList);
        let newAlbumTrack = document.createElement("li");
        newAlbumTrack.innerHTML = "New Song for Album 3 (3:18)";
        let newAlbumTrack2 = document.createElement("li");
        newAlbumTrack2.innerHTML = "New Song 2 for Album 3 (3:18)";
        newAlbumList.append(newAlbumTrack);
        newAlbumList.append(newAlbumTrack2);
        //CSS Änderungen
        //1. Ändern Sie die Farbe des Hintergrundes
        let body = document.getElementsByTagName("body");
        body[0].style.backgroundColor = "red"
        //2. Ändern Sie die Schriftgrösse von allen h1-Elementen
        const titles = document.getElementsByTagName("h1");
        for (title of titles){
            title.style.fontSize = "50px";
        }
        //3. Ändern Sie das Padding von allen Listenelementen
        const listItems = document.getElementsByTagName("li");
        for (listItem of listItems) {
            listItem.style.padding = "9px";
        }
                }
                const button = document.getElementById('btn')
                button.addEventListener('click', changeEverything);
            });