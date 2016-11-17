package com.bradlav.models;

public class RouteGrade {

	int numberGrade;
	String letterGrade;
	
	public RouteGrade(int numberGrade, String letterGrade) {
		super();
		this.numberGrade = numberGrade;
		this.letterGrade = letterGrade;
	}

	public RouteGrade(String letterGrade) {
		super();
		this.letterGrade = letterGrade;
		this.numberGrade = numberize();
	}
	
	
	public int getNumberGrade() {
		return numberGrade;
	}
	public void setNumberGrade(int numberGrade) {
		this.numberGrade = numberGrade;
	}
	public String getLetterGrade() {
		return letterGrade;
	}
	public void setLetterGrade(String letterGrade) {
		this.letterGrade = letterGrade;
	}
	
	public int numberize() {
		
		letterGrade = letterGrade.trim();
		
		// gets rid of the '+' that the profile template puts on some grades
		if (letterGrade.charAt(letterGrade.length() - 1) == '+') {
			letterGrade = letterGrade.substring(0, letterGrade.length()-1);
			System.out.println("letterGrade is " + letterGrade);
		}
		
		int number;
		
		switch (letterGrade) {
		case "5.5":
		case "V0":
			number = 1;
			break;
		case "5.6":
		case "V1":
			number = 2;
			break;
		case "5.7":
		case "V2":
			number = 3;
			break;
		case "5.8":
		case "V3":
			number = 4;
			break;
		case "5.9":
		case "V4":
			number = 5;
			break;
		case "5.10":
		case "5.10a":
		case "V5":
			number = 6;
			break;
		case "5.10b":
		case "V6":
			number = 7;
			break;
		case "5.10c":
		case "V7":
			number = 8;
			break;
		case "5.10d":
		case "V8":
			number = 9;
			break;
		case "5.11":
		case "5.11a":
		case "V9":
			number = 10;
			break;
		case "5.11b":
		case "V10":
			number = 11;
			break;
		case "5.11c":
			number = 12;
			break;
		case "5.11d":
			number = 13;
			break;
		case "5.12":
		case "5.12a":
			number = 14;
			break;
		case "5.12b":
			number = 15;
			break;
		case "5.12c":
			number = 16;
			break;
		case "5.12d":
			number = 17;
			break;
		case "5.13":
		case "5.13a":
			number = 18;
			break;
		case "5.13b":
			number = 19;
			break;
		case "5.13c":
			number = 20;
			break;
		case "5.13d":
			number = 21;
			break;
		case "5.14":
		case "5.14a":
			number = 22;
			break;
		case "5.14b":
			number = 23;
			break;
		case "5.14c":
			number = 24;
			break;
		case "5.14d":
			number = 25;
			break;
		default:
			number = -1;
		}

		return number;
	}
	
	
}
