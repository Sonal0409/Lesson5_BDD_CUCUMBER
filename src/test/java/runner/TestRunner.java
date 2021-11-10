package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = {"C:\\Users\\sonal\\eclipse-workspace\\Lesson5_BDD_CUCUMBER\\src\\main\\java\\features"},
		glue= {"stepDefinition"},
		plugin = {"pretty","html:Report1"}
		
		)


public class TestRunner {

}
