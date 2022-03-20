import List from "./List/index";
import Form from "./Form";
import {useState} from "react";

export default function Contacts(){
    const [contacts, setContacts] = useState([
        {  name: "Sena", surname: "OZ", phone: "5051234567", email: "tazeyta@gmail.com", company: "UZC" },
        {  name:"James", surname:"Butt", phone:"504-845-1427", email:"jbutt@gmail.com", company:"Benton, John B Jr" },
        {  name:"Josephine", surname:"Darakjy", phone:"810-374-9840", email:"josephine_darakjy@darakjy.org", company:"Chanay, Jeffrey A Esq" },
        {  name:"Art", surname:"Venere", phone:"856-264-4130", email:"art@venere.org", company:"Chemel, James L Cpa" },
        {  name:"Lenna", surname:"Paprocki", phone:"907-921-2010", email:"lpaprocki@hotmail.com", company:"Feltz Printing Service" },
        {  name:"Donette", surname:"Foller", phone:"513-549-4561", email:"donette.foller@cox.net", company:"Printing Dimensions" },
        {  name:"Simona", surname:"Morasca", phone:"419-800-6759", email:"simona@morasca.com", company:"Chapman, Ross E Esq" },
        {  name:"Mitsue", surname:"Tollner", phone:"773-924-8565", email:"mitsue_tollner@yahoo.com", company:"Morlong Associates" },
        {  name:"Leota", surname:"Dilliard", phone:"408-813-1105", email:"leota@hotmail.com", company:"Commercial Press" },
        {  name:"Sage", surname:"Wieser", phone:"605-794-4895", email:"sage_wieser@cox.net", company:"Truhlar And Truhlar Attys" },
        {  name:"Kris", surname:"Marrier", phone:"410-804-4694", email:"kris@gmail.com", company:"King, Christopher A Esq" },
        {  name:"Minna", surname:"Amigon", phone:"215-422-8694", email:"minna_amigon@yahoo.com", company:"Dorl, James J Esq" },
        {  name:"Abel", surname:"Maclead", phone:"631-677-3675", email:"amaclead@gmail.com", company:"Rangoni Of Florence" },
        {  name:"Kiley", surname:"Caldarera", phone:"310-254-3084", email:"kiley.caldarera@aol.com", company:"Feiner Bros" },
        {  name:"Graciela", surname:"Ruta", phone:"440-579-7763", email:"gruta@cox.net", company:"Buckley Miller & Wright" },
        {  name:"Cammy", surname:"Albares", phone:"956-841-7216", email:"calbares@gmail.com", company:"Rousseaux, Michael Esq" },
        {  name:"Mattie", surname:"Poquette", phone:"602-953-6360", email:"mattie@aol.com", company:"Century Communications" },
        {  name:"Meaghan", surname:"Garufi", phone:"931-235-7959", email:"meaghan@hotmail.com", company:"Bolton, Wilbur Esq" },
        {  name:"Gladys", surname:"Rim", phone:"414-377-2880", email:"gladys.rim@rim.org", company:"T M Byxbee Company Pc" },
        {  name:"Yuki", surname:"Whobrey", phone:"313-341-4470", email:"yuki_whobrey@aol.com", company:"Farmers Insurance Group" },
        {  name:"Fletcher", surname:"Flosi", phone:"815-426-5657", email:"fletcher.flosi@yahoo.com", company:"Post Box Services Plus" },
        {  name:"Bette", surname:"Nicka", phone:"610-492-4643", email:"bette_nicka@cox.net", company:"Sport En Art" },
        {  name:"Veronika", surname:"Inouye", phone:"408-813-4592", email:"vinouye@aol.com", company:"C 4 Network Inc" },
        {  name:"Willard", surname:"Kolmetz", phone:"972-896-4882", email:"willard@hotmail.com", company:"Ingalls, Donald R Esq" },
        {  name:"Maryann", surname:"Royster", phone:"518-448-8982", email:"mroyster@royster.com", company:"Franklin, Peter L Esq" },
        {  name:"Alisha", surname:"Slusarski", phone:"732-635-3453", email:"alisha@slusarski.com", company:"Wtlz Power 107 Fm" },
        {  name:"Allene", surname:"Iturbide", phone:"715-530-9863", email:"allene_iturbide@cox.net", company:"Ledecky, David Esq" },
        {  name:"Chanel", surname:"Caudy", phone:"913-899-1103", email:"chanel.caudy@caudy.org", company:"Professional Image Inc" },
        {  name:"Ezekiel", surname:"Chui", phone:"410-235-8738", email:"ezekiel@chui.com", company:"Sider, Donald C Esq" },
        {  name:"Willow", surname:"Kusko", phone:"212-934-5167", email:"wkusko@yahoo.com", company:"U Pull It" },
        {  name:"Bernardo", surname:"Figeroa", phone:"936-597-3614", email:"bfigeroa@aol.com", company:"Clark, Richard Cpa" },
        {  name:"Ammie", surname:"Corrio", phone:"614-648-3265", email:"ammie@corrio.com", company:"Moskowitz, Barry S" },
        {  name:"Francine", surname:"Vocelka", phone:"505-335-5293", email:"francine_vocelka@vocelka.com", company:"Cascade Realty Advisors Inc" },
        {  name:"Ernie", surname:"Stenseth", phone:"201-387-9093", email:"ernie_stenseth@aol.com", company:"Knwz Newsradio" },
        {  name:"Albina", surname:"Glick", phone:"732-782-6701", email:"albina@glick.com", company:"Giampetro, Anthony D" },
        {  name:"Alishia", surname:"Sergi", phone:"212-753-2740", email:"asergi@gmail.com", company:"Milford Enterprises Inc" },
        {  name:"Solange", surname:"Shinko", phone:"504-265-8174", email:"solange@shinko.com", company:"Mosocco, Ronald A" },
        {  name:"Jose", surname:"Stockham", phone:"212-569-4233", email:"jose@yahoo.com", company:"Tri State Refueler Co" },
        {  name:"Rozella", surname:"Ostrosky", phone:"805-609-1531", email:"rozella.ostrosky@ostrosky.com", company:"Parkway Company" },
        {  name:"Valentine", surname:"Gillian", phone:"210-300-6244", email:"valentine_gillian@gmail.com", company:"Fbs Business Finance" },
        {  name:"Kati", surname:"Rulapaugh", phone:"785-219-7724", email:"kati.rulapaugh@hotmail.com", company:"Eder Assocs Consltng Engrs Pc" },
        {  name:"Youlanda", surname:"Schemmer", phone:"541-993-2611", email:"youlanda@aol.com", company:"Tri M Tool Inc" },
        {  name:"Dyan", surname:"Oldroyd", phone:"913-645-8918", email:"doldroyd@aol.com", company:"International Eyelets Inc" },
        {  name:"Roxane", surname:"Campain", phone:"907-335-6568", email:"roxane@hotmail.com", company:"Rapid Trading Intl" },
        {  name:"Lavera", surname:"Perin", phone:"305-995-2078", email:"lperin@perin.org", company:"Abc Enterprises Inc" },
        {  name:"Erick", surname:"Ferencz", phone:"907-227-6777", email:"erick.ferencz@aol.com", company:"Cindy Turner Associates" },
        {  name:"Fatima", surname:"Saylors", phone:"952-479-2375", email:"fsaylors@saylors.org", company:"Stanton, James D Esq" },
        {  name:"Jina", surname:"Briddick", phone:"617-997-5771", email:"jina_briddick@briddick.com", company:"Grace Pastries Inc" },
        {  name:"Kanisha", surname:"Waycott", phone:"323-315-7314", email:"kanisha_waycott@yahoo.com", company:"Schroer, Gene E Esq" },
        {  name:"Emerson", surname:"Bowley", phone:"608-658-7940", email:"emerson.bowley@bowley.org", company:"Knights Inn" },
        {  name:"Blair", surname:"Malet", phone:"215-794-4519", email:"bmalet@yahoo.com", company:"Bollinger Mach Shp & Shipyard" }
    ]);

    return(
        <>
            <h1 className="mb-0">Contacts</h1>
            <div className='lg:flex'>
                <Form addContact={setContacts} contacts={contacts} />
                <List contacts={contacts} />
            </div>
        </>
    );
}