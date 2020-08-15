import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CharactersheetService {
  unsavedchanges:boolean = false;
  charsheet_selected:boolean=true;
  spellbook_view:boolean=false;
  spell = {
    name:"",
    school:"",
    castingTime:"",
    castingDuration:"",
    castingRange:"",
    ritual:"",
    concentration:"",
    components:"",
  }
  firstPage = {
    name: "",
    class: "",
    level: 0,
    race: "",
    background: "",
    alignment: "",
    player: "",
    experience: 0,
    strength_score: 10,
    dexterity_score: 10,
    constitution_score: 10,
    intellect_score: 10,
    wisdom_score: 10,
    charisma_score: 10,
    strength_modifier: 0,
    dexterity_modifier: 0,
    constitution_modifier: 0,
    intellect_modifier: 0,
    wisdom_modifier: 0,
    charisma_modifier: 0,
    passive_perception: 0,

    proficiency: 2,

    proficiencies:"",

    save_strength: 0,
    save_strength_prof:false,
    save_dexterity: 0,
    save_dexterity_prof:false,
    save_constitution: 0,
    save_constitution_prof:false,
    save_intellect: 0,
    save_intellect_prof:false,
    save_wisdom: 0,
    save_wisdom_prof:false,
    save_charisma: 0,
    save_charisma_prof:false,
    
    
    skill_acrobatics: 0,
    skill_acrobatics_proficiency:false,
    skill_animalHandling: 0,
    skill_animalHandling_proficiency:false,
    skill_arcana: 0,
    skill_arcana_proficiency:false,
    skill_athletics: 0,
    skill_athletics_proficiency:false,
    skill_deception: 0,
    skill_deception_proficiency:false,
    skill_history: 0,
    skill_history_proficiency:false,
    skill_insight: 0,
    skill_insight_proficiency:false,
    skill_intimidation: 0,
    skill_intimidation_proficiency:false,
    skill_investigation: 0,
    skill_investigation_proficiency:false,
    skill_medicine: 0,
    skill_medicine_proficiency:false,
    skill_nature: 0,
    skill_nature_proficiency:false,
    skill_perception: 0,
    skill_perception_proficiency:false,
    skill_performance: 0,
    skill_performance_proficiency:false,
    skill_persuasion: 0,
    skill_persuasion_proficiency:false,
    skill_religion: 0,
    skill_religion_proficiency:false,
    skill_sleightOfHand: 0,
    skill_sleightOfHand_proficiency:false,
    skill_stealth: 0,
    skill_stealth_proficiency:false,
    skill_survival: 0,
    skill_survival_proficiency:false,

    initiative: 0,
    speed: 0,
    armorClass: 0,

    health_maximum: 0,
    health_current: 0,
    health_temporary: 0,

    hitDice_total: "",
    hitDice_value: "",

    deathsaves_life1: false,
    deathsaves_life2: false,
    deathsaves_life3: false,
    
    deathsaves_death1: false,
    deathsaves_death2: false,
    deathsaves_death3: false,

    weapon1_name: "",
    weapon1_atkBonus: "",
    weapon1_damageType: "",

    weapon2_name: "",
    weapon2_atkBonus: "",
    weapon2_damageType: "",

    weapon3_name: "",
    weapon3_atkBonus: "",
    weapon3_damageType: "",

    offense_textbox: "",

    inventory_equipment: "",
    inventory_copper: 0,
    inventory_silver: 0,
    inventory_electrum: 0,
    inventory_gold: 0,
    inventory_platinum: 0,

    roleplay_personalityTraits: "",
    roleplay_ideals: "",
    roleplay_bonds: "",
    roleplay_flaws: "",
    roleplay_featuresAndTraits: ""
  }
  spellbook = {
    spellClass:"",
    spellAbility:"",
    spellSave:0,
    spellAtkBonus:0,
    cantrips:[],
    firstLvl: [],
    firstSlots:0,
    firstSlotsTotal:0,
    secondLvl: [],
    secondSlots:0,
    secondSlotsTotal:0,
    thirdLvl: [],
    thirdSlots:0,
    thirdSlotsTotal:0,
    fourthLvl: [],
    fourthSlots:0,
    fourthSlotsTotal:0,
    fifthLvl: [],
    fifthSlots:0,
    fifthSlotsTotal:0,
    sixthLvl: [],
    sixthSlots:0,
    sixthSlotsTotal:0,
    seventhLvl: [],
    seventhSlots:0,
    seventhSlotsTotal:0,
    eigthLvl: [],
    eigthSlots:0,
    eigthSlotsTotal:0,
    ninthLvl: [],
    ninthSlots:0,
    ninthSlotsTotal:0,
  }
  public calculateCharacterSkills(){
    //set modifier values
    this.firstPage.strength_modifier = Math.floor((this.firstPage.strength_score-10)/2);
    this.firstPage.dexterity_modifier=Math.floor((this.firstPage.dexterity_score-10)/2);
    this.firstPage.constitution_modifier=Math.floor((this.firstPage.constitution_score-10)/2);
    this.firstPage.intellect_modifier=Math.floor((this.firstPage.intellect_score-10)/2);
    this.firstPage.wisdom_modifier=Math.floor((this.firstPage.wisdom_score-10)/2);
    this.firstPage.charisma_modifier=Math.floor((this.firstPage.charisma_score-10)/2);
    if(this.firstPage.skill_perception_proficiency)this.firstPage.passive_perception= 10 + this.firstPage.wisdom_modifier+this.firstPage.proficiency;
    else this.firstPage.passive_perception = 10 + this.firstPage.wisdom_modifier;

    //set save values
    if(this.firstPage.save_strength_prof)this.firstPage.save_strength=this.firstPage.strength_modifier+this.firstPage.proficiency;
    else this.firstPage.save_strength=this.firstPage.strength_modifier;
    if(this.firstPage.save_dexterity_prof)this.firstPage.save_dexterity=this.firstPage.dexterity_modifier+this.firstPage.proficiency;
    else this.firstPage.save_dexterity=this.firstPage.dexterity_modifier;
    if(this.firstPage.save_constitution_prof)this.firstPage.save_constitution=this.firstPage.constitution_modifier+this.firstPage.proficiency;
    else this.firstPage.save_constitution=this.firstPage.constitution_modifier;
    if(this.firstPage.save_intellect_prof)this.firstPage.save_intellect=this.firstPage.intellect_modifier+this.firstPage.proficiency;
    else this.firstPage.save_intellect=this.firstPage.intellect_modifier;
    if(this.firstPage.save_wisdom_prof)this.firstPage.save_wisdom=this.firstPage.wisdom_modifier+this.firstPage.proficiency;
    else this.firstPage.save_wisdom=this.firstPage.wisdom_modifier;
    if(this.firstPage.save_charisma_prof)this.firstPage.save_charisma=this.firstPage.charisma_modifier+this.firstPage.proficiency;
    else this.firstPage.save_charisma=this.firstPage.charisma_modifier;

    //set skill values
    //str related skills
    if(this.firstPage.skill_athletics_proficiency)this.firstPage.skill_athletics=this.firstPage.strength_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_athletics=this.firstPage.strength_modifier;
    //dex related skills
    if(this.firstPage.skill_acrobatics_proficiency)this.firstPage.skill_acrobatics=this.firstPage.dexterity_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_acrobatics=this.firstPage.dexterity_modifier;
    if(this.firstPage.skill_sleightOfHand_proficiency)this.firstPage.skill_sleightOfHand=this.firstPage.dexterity_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_sleightOfHand=this.firstPage.dexterity_modifier;
    if(this.firstPage.skill_stealth_proficiency)this.firstPage.skill_stealth=this.firstPage.dexterity_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_stealth=this.firstPage.dexterity_modifier;
    //int related skills
    if(this.firstPage.skill_arcana_proficiency)this.firstPage.skill_arcana=this.firstPage.intellect_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_arcana=this.firstPage.intellect_modifier;
    if(this.firstPage.skill_history_proficiency)this.firstPage.skill_history=this.firstPage.intellect_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_history=this.firstPage.intellect_modifier;
    if(this.firstPage.skill_investigation_proficiency)this.firstPage.skill_investigation=this.firstPage.intellect_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_investigation=this.firstPage.intellect_modifier;
    if(this.firstPage.skill_nature_proficiency)this.firstPage.skill_nature=this.firstPage.intellect_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_nature=this.firstPage.intellect_modifier;
    if(this.firstPage.skill_religion_proficiency)this.firstPage.skill_religion=this.firstPage.intellect_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_religion=this.firstPage.intellect_modifier;
    //wis related skills
    if(this.firstPage.skill_animalHandling_proficiency)this.firstPage.skill_animalHandling=this.firstPage.wisdom_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_animalHandling=this.firstPage.wisdom_modifier;
    if(this.firstPage.skill_insight_proficiency)this.firstPage.skill_insight=this.firstPage.wisdom_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_insight=this.firstPage.wisdom_modifier;
    if(this.firstPage.skill_medicine_proficiency)this.firstPage.skill_medicine=this.firstPage.wisdom_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_medicine=this.firstPage.wisdom_modifier;
    if(this.firstPage.skill_perception_proficiency)this.firstPage.skill_perception=this.firstPage.wisdom_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_perception=this.firstPage.wisdom_modifier;
    if(this.firstPage.skill_survival_proficiency)this.firstPage.skill_survival=this.firstPage.wisdom_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_survival=this.firstPage.wisdom_modifier;
    //chr related skills
    if(this.firstPage.skill_deception_proficiency)this.firstPage.skill_deception=this.firstPage.charisma_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_deception=this.firstPage.charisma_modifier;
    if(this.firstPage.skill_intimidation_proficiency)this.firstPage.skill_intimidation=this.firstPage.charisma_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_intimidation=this.firstPage.charisma_modifier;
    if(this.firstPage.skill_performance_proficiency)this.firstPage.skill_performance=this.firstPage.charisma_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_performance=this.firstPage.charisma_modifier;
    if(this.firstPage.skill_persuasion_proficiency)this.firstPage.skill_persuasion=this.firstPage.charisma_modifier+this.firstPage.proficiency;
    else this.firstPage.skill_persuasion=this.firstPage.charisma_modifier;
  }
  public setCharcterValuesNew(){
    //this.firstPage.
    this.firstPage.name = "",
    this.firstPage.class = "",
    this.firstPage.level = 0,
    this.firstPage.race = "",
    this.firstPage.background = "",
    this.firstPage.alignment = "",
    this.firstPage.player = "",
    this.firstPage.experience = 0,
    this.firstPage.strength_score = 10,
    this.firstPage.dexterity_score = 10,
    this.firstPage.constitution_score = 10,
    this.firstPage.intellect_score = 10,
    this.firstPage.wisdom_score = 10,
    this.firstPage.charisma_score = 10,
    this.firstPage.strength_modifier = 0,
    this.firstPage.dexterity_modifier = 0,
    this.firstPage.constitution_modifier = 0,
    this.firstPage.intellect_modifier = 0,
    this.firstPage.wisdom_modifier = 0,
    this.firstPage.charisma_modifier = 0,
    this.firstPage.passive_perception = 0,

    this.firstPage.proficiencies = "",
    this.firstPage.proficiency = 2,

    this.firstPage.save_strength = 0,
    this.firstPage.save_dexterity = 0,
    this.firstPage.save_constitution = 0,
    this.firstPage.save_intellect = 0,
    this.firstPage.save_wisdom = 0,
    this.firstPage.save_charisma = 0,

    this.firstPage.skill_acrobatics = 0,
    this.firstPage.skill_acrobatics_proficiency =false,
    this.firstPage.skill_animalHandling = 0,
    this.firstPage.skill_animalHandling_proficiency =false,
    this.firstPage.skill_arcana = 0,
    this.firstPage.skill_arcana_proficiency =false,
    this.firstPage.skill_athletics = 0,
    this.firstPage.skill_athletics_proficiency =false,
    this.firstPage.skill_deception = 0,
    this.firstPage.skill_deception_proficiency =false,
    this.firstPage.skill_history = 0,
    this.firstPage.skill_history_proficiency =false,
    this.firstPage.skill_insight = 0,
    this.firstPage.skill_insight_proficiency =false,
    this.firstPage.skill_intimidation = 0,
    this.firstPage.skill_intimidation_proficiency =false,
    this.firstPage.skill_investigation = 0,
    this.firstPage.skill_investigation_proficiency =false,
    this.firstPage.skill_medicine = 0,
    this.firstPage.skill_medicine_proficiency =false,
    this.firstPage.skill_nature = 0,
    this.firstPage.skill_nature_proficiency =false,
    this.firstPage.skill_perception = 0,
    this.firstPage.skill_perception_proficiency =false,
    this.firstPage.skill_performance = 0,
    this.firstPage.skill_performance_proficiency =false,
    this.firstPage.skill_persuasion = 0,
    this.firstPage.skill_persuasion_proficiency =false,
    this.firstPage.skill_religion = 0,
    this.firstPage.skill_religion_proficiency =false,
    this.firstPage.skill_sleightOfHand = 0,
    this.firstPage.skill_sleightOfHand_proficiency =false,
    this.firstPage.skill_stealth = 0,
    this.firstPage.skill_stealth_proficiency =false,
    this.firstPage.skill_survival = 0,
    this.firstPage.skill_survival_proficiency =false,

    this.firstPage.initiative = 0,
    this.firstPage.speed = 0,
    this.firstPage.armorClass = 0,

    this.firstPage.health_maximum = 0,
    this.firstPage.health_current = 0,
    this.firstPage.health_temporary = 0,

    this.firstPage.hitDice_total = "",
    this.firstPage.hitDice_value = "",

    this.firstPage.deathsaves_life1 = false,
    this.firstPage.deathsaves_life2 = false,
    this.firstPage.deathsaves_life3 = false,
    this.firstPage.deathsaves_death1 = false,
    this.firstPage.deathsaves_death2 = false,
    this.firstPage.deathsaves_death3 = false,

    this.firstPage.weapon1_name = "",
    this.firstPage.weapon1_atkBonus = "",
    this.firstPage.weapon1_damageType = "",

    this.firstPage.weapon2_name = "",
    this.firstPage.weapon2_atkBonus = "",
    this.firstPage.weapon2_damageType = "",

    this.firstPage.weapon3_name = "",
    this.firstPage.weapon3_atkBonus = "",
    this.firstPage.weapon3_damageType = "",

    this.firstPage.offense_textbox = "",

    this.firstPage.inventory_equipment = "",
    this.firstPage.inventory_copper = 0,
    this.firstPage.inventory_silver = 0,
    this.firstPage.inventory_electrum = 0,
    this.firstPage.inventory_gold = 0,
    this.firstPage.inventory_platinum = 0,

    this.firstPage.roleplay_personalityTraits = "",
    this.firstPage.roleplay_ideals = "",
    this.firstPage.roleplay_bonds = "",
    this.firstPage.roleplay_flaws = "",
    this.firstPage.roleplay_featuresAndTraits = ""

    //set spellbook -new

    this.spellbook.spellClass="",
    this.spellbook.spellAbility="",
    this.spellbook.spellSave=0,
    this.spellbook.spellAtkBonus=0,
    this.spellbook.cantrips=[],
    this.spellbook.firstLvl= [],
    this.spellbook.firstSlots=0,
    this.spellbook.firstSlotsTotal=0,
    this.spellbook.secondLvl= [],
    this.spellbook.secondSlots=0,
    this.spellbook.secondSlotsTotal=0,
    this.spellbook.thirdLvl= [],
    this.spellbook.thirdSlots=0,
    this.spellbook.thirdSlotsTotal=0,
    this.spellbook.fourthLvl= [],
    this.spellbook.fourthSlots=0,
    this.spellbook.fourthSlotsTotal=0,
    this.spellbook.fifthLvl= [],
    this.spellbook.fifthSlots=0,
    this.spellbook.fifthSlotsTotal=0,
    this.spellbook.sixthLvl= [],
    this.spellbook.sixthSlots=0,
    this.spellbook.sixthSlotsTotal=0,
    this.spellbook.seventhLvl= [],
    this.spellbook.seventhSlots=0,
    this.spellbook.seventhSlotsTotal=0,
    this.spellbook.eigthLvl= [],
    this.spellbook.eigthSlots=0,
    this.spellbook.eigthSlotsTotal=0,
    this.spellbook.ninthLvl= [],
    this.spellbook.ninthSlots=0,
    this.spellbook.ninthSlotsTotal=0
  }
  constructor() {

  } 
}
