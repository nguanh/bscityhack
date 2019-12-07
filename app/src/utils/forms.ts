import {PROCEDURE} from '../store/reducers/procedureReducer';

export const form1 = {
    name: "",
    information: "Sie können sich\n" +
        "\n" +
        "persönlich oder durch einen Bevollmächtigten\n" +
        "ummelden. Bei Vorlage Ihres Personalausweises wird die Wohnanschrift auf der Rückseite geändert.\n" +
        "\n" +
        "Trennen sich die gemeinsam sorgeberechtigten Eltern und ein Elternteil zieht mit den Kindern " +
        "in eine andere Wohnung, wird für die Ummeldung der Kinder die Einverständniserklärung des anderen Elternteils benötigt.\n" +
        "Diese Einverständniserklärung muss auch vorgelegt werden, wenn die Kinder von einem Elternteil zum anderen umziehen.\n" +
        "\n" +
        "Jugendliche ab 16 Jahren können sich auch ohne Zustimmung der Eltern ummelden.",
    checklist :[
      "Personalausweis oder Reisepass",
      "Bestätigung des Wohnungsgebers",
      "Kfz-Schein",
      "inverständniserklärung zur Anmeldung des Kindes im Haushalt des anderen Elternteils"
    ],
};


export function getForm(name: string, procedureId: PROCEDURE = null){
    return form1[name];
}
