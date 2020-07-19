import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersheetService {
  /* characterLoadEmmitter = new EventEmitter();
  characterLoadSUB: Subscription;  */

  unsavedchanges:boolean = false;
  charsheet_selected:boolean=true;
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

    proficiency: 0,

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

    deathsaves_life: 0,
    deathsaves_death: 0,

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

  /**
   * setCharacterValues
   */
  public setCharacterValuesFirstPage( csfp? ){// = this.firstPage) {
    if(csfp != null){
    //set header values
    this.firstPage.name = csfp.name;
    this.firstPage.class = csfp.class;
    this.firstPage.level = csfp.level;
    this.firstPage.race = csfp.race;
    this.firstPage.background = csfp.background;
    this.firstPage.alignment = csfp.alignment;
    this.firstPage.player = csfp.player;
    this.firstPage.experience = csfp.experience;
    //set attribute values
    this.firstPage.strength_score =csfp.strength_score;
    this.firstPage.dexterity_score=csfp.dexterity_score;
    this.firstPage.constitution_score=csfp.constitution_score;
    this.firstPage.intellect_score=csfp.intellect_score;
    this.firstPage.wisdom_score=csfp.wisdom_score;
    this.firstPage.charisma_score=csfp.charisma_score;
    //set proficiency values
    this.firstPage.skill_acrobatics_proficiency=csfp.skill_acrobatics_proficiency;
    this.firstPage.skill_animalHandling_proficiency=csfp.skill_animalHandling_proficiency;
    this.firstPage.skill_arcana_proficiency=csfp.skill_arcana_proficiency;
    this.firstPage.skill_athletics_proficiency=csfp.skill_athletics_proficiency;
    this.firstPage.skill_deception_proficiency=csfp.skill_deception_proficiency;
    this.firstPage.skill_history_proficiency=csfp.skill_history_proficiency;
    this.firstPage.skill_insight_proficiency=csfp.skill_insight_proficiency;
    this.firstPage.skill_intimidation_proficiency=csfp.skill_intimidation_proficiency;
    this.firstPage.skill_investigation_proficiency=csfp.skill_investigation_proficiency;
    this.firstPage.skill_medicine_proficiency=csfp.skill_medicine_proficiency;
    this.firstPage.skill_nature_proficiency=csfp.skill_nature_proficiency;
    this.firstPage.skill_perception_proficiency=csfp.skill_perception_proficiency;
    this.firstPage.skill_performance_proficiency=csfp.skill_performance_proficiency;
    this.firstPage.skill_persuasion_proficiency=csfp.skill_persuasion_proficiency;
    this.firstPage.skill_religion_proficiency=csfp.skill_religion_proficiency;
    this.firstPage.skill_sleightOfHand_proficiency=csfp.skill_sleightOfHand_proficiency;
    this.firstPage.skill_stealth_proficiency=csfp.skill_stealth_proficiency;
    this.firstPage.skill_survival_proficiency=csfp.skill_survival_proficiency;
    //calculate modifiers and skills
    this.calculateCharacterSkills();
    }
    else{
      this.setCaracterValuesTest();
      this.calculateCharacterSkills();
    }
    
    
    
    
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
  public setCaracterValuesTest(csfp=this.firstPage){
    csfp.name= "Theo -- Test is good!";
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

    this.firstPage.proficiency = 0,

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

    this.firstPage.deathsaves_life = 0,
    this.firstPage.deathsaves_death = 0,

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
  }
  
  constructor() {

  }
  
}

 /* //---character sheet first page values -----------save incase needed later----------
  "":string="";
  0:number=0;
  0:number=10;
  //header
  name:string = "";
  class:string = "";
  level:number = 0;
  background:string = "";
  race:string = "";
  alignment:string = "";
  player:string = "";
  experience:number = 0;
  //stats
  strength_score:number = 10;
  dexterity_score:number = 10;
  constitution_score:number = 10;
  intellect_score:number = 10;
  wisdom_score:number = 10;
  charisma_score:number = 10;
  //derived_stats
  strength_modifier:number = 0;
  dexterity_modifier:number = 0;
  constitution_modifier:number = 0;
  intellect_modifier:number = 0;
  wisdom_modifier:number = 0;
  charisma_modifier:number = 0;
  
  passive_perception:number = 0;
  
  proficiency:number = 0;
  
  save_strength:boolean;
  save_dexterity:boolean;
  save_constitution:boolean;
  save_intellect:boolean;
  save_wisdom:boolean;
  save_charisma:boolean;
  
  skill_acrobatics:number = 0;
  skill_animalHandling:number = 0;
  skill_arcana:number = 0;
  skill_athletics:number = 0;
  skill_deception:number = 0;
  skill_history:number = 0;
  skill_insight:number = 0;
  skill_intimidation:number = 0;
  skill_investigation:number = 0;
  skill_medicine:number = 0;
  skill_nature:number = 0;
  skill_perception:number = 0;
  skill_performance:number = 0;
  skill_persuasion:number = 0;
  skill_religion:number = 0;
  skill_sleightOfHand:number = 0;
  skill_stealth:number = 0;
  skill_survival:number = 0;
  
  initiative:number = 0;
  speed:number = 0;
  armorClass:number = 0;
  
  health_maximum:number = 0;
  health_current:number = 0;
  health_temporary:number = 0;
  
  hitDice_total:string = "";
  hitDice_value:string = "";
  
  deathsaves_life:number = 0;
  deathsaves_death:number = 0;
  
  weapon1_name:string = "";
  weapon1_atkBonus:string = "";
  weapon1_damageType:string = "";
  
  weapon2_name:string = "";
  weapon2_atkBonus:string = "";
  weapon2_damageType:string = "";
  
  weapon3_name:string = "";
  weapon3_atkBonus:string = "";
  weapon3_damageType:string = "";
  
  offense_textbox:string = "";
  
  inventory_equipment:string = "";
  inventory_copper:number = 0;
  inventory_silver:number = 0;
  inventory_electrum:number = 0;
  inventory_gold:number = 0;
  inventory_platinum:number = 0;
  
  roleplay_personalityTraits:string = "";
  roleplay_ideals:string = "";
  roleplay_bonds:string = "";
  roleplay_flaws:string = "";
  roleplay_featuresAndTraits:string = ""; */
