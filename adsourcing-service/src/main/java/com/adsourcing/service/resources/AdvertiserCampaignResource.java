package com.adsourcing.service.resources;


import com.adsourcing.service.mapper.CampaignMapper;
import com.adsourcing.service.model.AdvertiserCampaign;
import com.adsourcing.service.model.Campaign;
import com.adsourcing.service.repository.CampaignRepository;
import com.yammer.metrics.annotation.Timed;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.HashSet;
import java.util.Set;

import static com.google.common.collect.Sets.newHashSet;

@Path("/api/advertiser")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdvertiserCampaignResource {

    private CampaignRepository campaignRepository;
    private CampaignMapper campaignMapper;

    @Inject
    public AdvertiserCampaignResource(CampaignRepository campaignRepository, CampaignMapper campaignMapper) {
        this.campaignRepository = campaignRepository;
        this.campaignMapper = campaignMapper;
    }

    @GET
    @Path("/{advertiserId}/campaign/{id}")
    @Timed
    public AdvertiserCampaign getById(@PathParam("id") Integer id) {
        Campaign campaign = this.campaignRepository.findById(id);
        AdvertiserCampaign advertiserCampaign = this.campaignMapper.toAdvertiserCampaign(campaign);
        return advertiserCampaign;
    }

    @POST
    @Path("/{advertiserId}/campaign")
    @Timed
    public void save(AdvertiserCampaign advertiserCampaign) {
        Campaign campaign = this.campaignMapper.toCampaign(advertiserCampaign);
        this.campaignRepository.save(campaign);
    }

    @GET
    @Path("/{advertiserId}/campaign")
    @Timed
    public Set<AdvertiserCampaign> getAllByAdvertiserId(@PathParam("advertiserId") Integer advertiserId) {
        if (advertiserId == null) {
            return new HashSet<AdvertiserCampaign>();
        }
        Set<Campaign> campaigns = campaignRepository.findByAdvertiserId(advertiserId);
        Set<AdvertiserCampaign> advertiserCampaigns = newHashSet();
        for (Campaign campaign : campaigns) {
            AdvertiserCampaign advertiserCampaign = campaignMapper.toAdvertiserCampaign(campaign);
            advertiserCampaigns.add(advertiserCampaign);
        }
        return advertiserCampaigns;
    }
}
