// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/inspire/gmd/constraints/templates/OtherConstraints.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:otherConstraints\',minOccurs:1,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.MD_LegalConstraints.otherConstraints}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n      data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n            \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.noLimitations}\',\r\n              value:\'no limitations\'"\x3e\x3c/div\x3e      \r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.confidentialityOfProceedings}\',\r\n              value:\'(a) the confidentiality of the proceedings of public authorities,where such confidentiality is provided for by law;\'"\x3e\x3c/div\x3e      \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.internationalRelations}\',\r\n              value:\'(b) international relations, public security or national defence;\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.courseOfJustice}\',\r\n              value:\'(c) the course of justice, the ability of any person to receive a fair trial or the ability of a public authority to conduct an enquiry of a criminal or disciplinary nature;\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.confidentialityOfCommercial}\',\r\n              value:\'(d) the confidentiality of commercial or industrial information, where such confidentiality is provided for by national or Community   law to protect a legitimate economic interest, including the public interest in maintaining statistical confidentiality and tax secrecy;\'"\x3e\x3c/div\x3e      \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.intellectualProperty}\',\r\n              value:\'(e) intellectual property rights;\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.confidentialityOfPersonalData}\',\r\n              value:\'(f) the confidentiality of personal data and/or files relating to a natural person where that person has not consented to the disclosure of the information to the public, where such confidentiality is provided for by national or Community law;\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.interestsOrProtection}\',\r\n              value:\'(g) the interests or protection of any person who supplied the information requested on a voluntary basis without being under, or capable of being put under, a legal obligation to do so, unless that person has consented to the release of the information concerned;\'"\x3e\x3c/div\x3e      \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.protectionOfEnvironment}\',\r\n              value:\'(h) the protection of the environment to which such information relates, such as the location of rare species.\'"\x3e\x3c/div\x3e                                          \r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nInspire.otherConstraints.freeText}\',\r\n              value:\'_other_\',isOther:true"\x3e\x3c/div\x3e                        \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n      \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/inspire/gmd/constraints/OtherConstraints","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option ../../../../form/iso/GcoElement dojo/text!./templates/OtherConstraints.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.inspire.gmd.constraints.OtherConstraints",
a,f);return a});