package com.adsourcing.service.repository;

import com.adsourcing.service.model.Advertiser;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import static com.google.common.collect.Maps.newHashMap;

@Singleton
public class AdvertiserRepository {
    private static AtomicInteger NEXT_ID = new AtomicInteger(1);

    private Map<Integer, Advertiser> advertisers = newHashMap();

    @Inject
    public AdvertiserRepository(AdvertiserData advertiserData) {
        initRepository(advertiserData);
    }

    private void initRepository(AdvertiserData advertiserData) {
        for (Advertiser advertiser : advertiserData.getAdvertisers()) {
            save(advertiser);
        }
    }

    public void save(Advertiser advertiser) {
        if (advertiser.getId() == null) {
            Integer id = NEXT_ID.getAndIncrement();
            advertiser.setId(id);
        }
        advertisers.put(advertiser.getId(), advertiser);
    }

    public Advertiser findById(int id) {
        return advertisers.get(id);
    }

    public Advertiser findByName(String name) {
        Advertiser result = null;
        Iterator<Advertiser> advertisersIter = advertisers.values().iterator();
        while (advertisersIter.hasNext()) {
           Advertiser advertiser = advertisersIter.next();
            if (advertiser.getName().equals(name)) {
               result = advertiser;
            }
        }
        return result;
    }
}
