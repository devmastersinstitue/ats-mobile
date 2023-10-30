package com.example.demo;

import com.example.demo.domain.Human2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	@GetMapping("/name")
	public String hello(){
		return "My name is Alishba Tasleem";
	}

	@GetMapping("/father")
	public String father(){
		return "My father name is Tasleem";
	}

////	@GetMapping("/info")
////	public String info(){
////		Human human = new Human("Alishba Tasleem", "Tasleem", 20);
//// 		return human.display();
//	}

	@GetMapping("/list")
	public List<Human2> list(){
		return List.of(new Human2("Alishba Tasleem", "Tasleem", 20),
				new Human2("Danish", "Hafeez", 28));
	}

}





