interface InterfaceFormation{
    prix(): number;
}

class Formation implements InterfaceFormation {
    prix(): number {
        return 1000000
    }
}

class FormatAvecOptionCertif implements InterfaceFormation{
    formationCertifiante : InterfaceFormation;
    constructor(_uneFormationCertifiante : InterfaceFormation){
        this.formationCertifiante = _uneFormationCertifiante
    }
    prix(): number {
        return this.formationCertifiante.prix()
    }
}

class formationCertifCCNA extends FormatAvecOptionCertif{
    prix(): number {
        return super.prix() + 100000
    }
}

class formationCertifDEVENET extends FormatAvecOptionCertif{
    prix(): number {
        return super.prix() + 90000
    }
}

class formationCertifOracle extends FormatAvecOptionCertif{
    prix(): number {
        return super.prix() + 130000
    }
}


const formationSimple = new Formation();
console.log("Prix Formation Simple:", formationSimple.prix())

const formationCCNA = new formationCertifCCNA(formationSimple)
console.log("Prix Formation avec certification CCNA: ", formationCCNA.prix())

const formationDEVNET = new formationCertifDEVENET(formationSimple)
console.log("Prix Formation avec certification DEVNET: ", formationDEVNET.prix())

const formationOracle = new formationCertifOracle(formationSimple)
console.log("Prix Formation avec certification Oracle: ", formationOracle.prix())

const formationCCNA_DEVNET = new formationCertifDEVENET(new formationCertifCCNA(new Formation()))
console.log("Prix Formation avec certification CCNA-DEVNET: ", formationCCNA_DEVNET.prix())

const formationCCNA_ORACLE = new formationCertifOracle(new formationCertifCCNA(new Formation()))
console.log("Prix Formation avec certification CCNA-Oracle: ", formationCCNA_ORACLE.prix())

const formationDEVNET_ORACLE = new formationCertifOracle(new formationCertifDEVENET(new Formation()))
console.log("Prix Formation avec certification DEVNET-Oracle: ", formationDEVNET_ORACLE.prix())

const formationCCNA_DEVNET_ORACLE = new formationCertifOracle(new formationCertifDEVENET(new formationCertifCCNA(new Formation()))) 
console.log("Prix Formation avec certification CCNA-DEVNET-Oracle: ", formationCCNA_DEVNET_ORACLE.prix())




















