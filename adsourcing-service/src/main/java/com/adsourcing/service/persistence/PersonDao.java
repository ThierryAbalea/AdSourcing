package com.adsourcing.service.persistence;

import com.adsourcing.service.representations.Person;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;
import java.util.Map;

import static com.google.common.collect.Lists.newArrayList;
import static com.google.common.collect.Maps.newHashMap;

@Singleton
public class PersonDao {

    private Map<Integer, Person> personsMap = newHashMap();

    @Inject
    public PersonDao() {

    }

    public void insert(Person person) {
        this.personsMap.put(person.getId(), person);
    }

    public void update(Person person) {
        this.personsMap.put(person.getId(), person);

    }

    public Person findById(int id) {
        return personsMap.get(id);

    }

    public List<Person> getAll() {
        return newArrayList(this.personsMap.values());

    }

    public void deleteById(int id) {
        personsMap.remove(id);
    }

    public void deleteByEmail(String email) {

    }
}
