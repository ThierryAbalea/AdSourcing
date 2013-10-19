package com.adsourcing.service;

import com.yammer.dropwizard.Service;
import com.yammer.dropwizard.config.Bootstrap;
import com.yammer.dropwizard.config.Environment;
import com.adsourcing.service.health.TemplateHealthCheck;
import com.adsourcing.service.persistence.PersonDao;
import com.adsourcing.service.representations.Person;
import com.adsourcing.service.resources.HelloWorldResource;
import com.adsourcing.service.resources.PersonsResource;
import dagger.ObjectGraph;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * This main-class will be used by the start_server.sh script to start the server. It can also be
 * started up in the IDE, just remember to set the correct working directory and provide the expected
 * parameters: server adsourcing-service.yml
 */
public class EventService extends Service<EventConfiguration> {

    final static Logger LOG = LoggerFactory.getLogger(EventService.class);

    private static List<Person> persons;

    private PersonsResource personsResource;
    private PersonDao personDao;

    @Inject
    public EventService(PersonsResource personsResource, PersonDao personDao) {
        this.personsResource = personsResource;
        this.personDao = personDao;
    }

    static {
        persons = Collections.synchronizedList(new ArrayList<Person>());
        int id = 0;
        persons.add(id++, new Person("Per", "per@kodemaker.no", "12345678"));
        persons.add(id++, new Person("Magnus", "magnus@kodemaker.no"));
        persons.add(id++, new Person("Ronny", "ronny@kodemaker.no"));
        persons.add(id++, new Person("August", "august@kodemaker.no"));
        persons.add(id++, new Person("Helge", "helge.jensen@finn.no"));
    }

    public static void main(String[] args) throws Exception {
        ObjectGraph objectGraph = ObjectGraph.create(new DaggerModule());
        EventService eventService = objectGraph.get(EventService.class);

        String[] dropWizardArgs;
        if (args.length > 1) {
            dropWizardArgs = args;
        } else {
            String url = EventService.class.getResource("/adsourcing-service.yml").getPath();
            dropWizardArgs = new String[] {"server", url};
        }
        eventService.run(dropWizardArgs);
    }

    @Override
    public void initialize(Bootstrap<EventConfiguration> bootstrap) {
        bootstrap.setName("dw-server"); // name must match the yaml config file
    }

    @Override
    public void run(EventConfiguration conf, Environment env) throws ClassNotFoundException {
        String template = conf.getTemplate();
        String defaultName = conf.getDefaultName();

        seedTheDatabase(personDao);

        env.addResource(personsResource);
        env.addResource(new HelloWorldResource(template, defaultName));
        env.addHealthCheck(new TemplateHealthCheck(template));
    }

    private void seedTheDatabase(PersonDao personDao) {
        for (Person p : persons) {
            LOG.info("Add person");
            personDao.insert(p);
        }
    }
}
