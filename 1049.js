let a = "vertebrado";
let b = "mamifero";
let c = "onivoro";

let animal = {
    vertebrado : {
                ave : {
                    carnivoro : "aguia",
                    onivoro : "pomba"
                },
                mamifero : {
                    onivoro : "homem",
                    herbivoro : "vaca"
                }     
    },
    invertebrado : {
                inseto : {
                    hematofago : "pulga",
                    herbivoro : "lagarta"
                },
                anelideo : {
                    hematofago : "sanguessuga",
                    onivoro : "minhoca"
                }     
    }
}

console.log(animal[a][b][c]);
