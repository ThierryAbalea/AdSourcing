package com.adsourcing.service;

import com.adsourcing.service.health.TemplateHealthCheck;
import com.adsourcing.service.resources.AdvertiserCampaignResource;
import com.adsourcing.service.resources.DesignerCampaignResource;
import com.yammer.dropwizard.Service;
import com.yammer.dropwizard.config.Bootstrap;
import com.yammer.dropwizard.config.Environment;
import dagger.ObjectGraph;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;

/**
 * This main-class will be used by the start_server.sh script to start the server. It can also be
 * started up in the IDE, just remember to set the correct working directory and provide the expected
 * parameters: server adsourcing-service.yml
 */
public class EventService extends Service<EventConfiguration> {

    final static Logger LOG = LoggerFactory.getLogger(EventService.class);

    private AdvertiserCampaignResource advertiserCampaignResource;
    private DesignerCampaignResource designerCampaignResource;

    @Inject
    public EventService(AdvertiserCampaignResource advertiserCampaignResource,
                        DesignerCampaignResource designerCampaignResource) {
        this.advertiserCampaignResource = advertiserCampaignResource;
        this.designerCampaignResource = designerCampaignResource;
    }

    public static void main(String[] args) throws Exception {
        ObjectGraph objectGraph = ObjectGraph.create(new DaggerModule());
        EventService eventService = objectGraph.get(EventService.class);

        String[] dropWizardArgs;
        if (args.length > 1) {
            dropWizardArgs = args;
        } else {
            String url = EventService.class.getResource("/adsourcing-service.yml").getPath();
            dropWizardArgs = new String[]{"server", url};
        }
        eventService.run(dropWizardArgs);
    }

    @Override
    public void initialize(Bootstrap<EventConfiguration> bootstrap) {
        bootstrap.setName("adsourcing-service"); // name must match the yaml config file
    }

    @Override
    public void run(EventConfiguration conf, Environment env) throws ClassNotFoundException {
        String template = conf.getTemplate();
        String defaultName = conf.getDefaultName();

        env.addResource(advertiserCampaignResource);
        env.addResource(designerCampaignResource);
        env.addHealthCheck(new TemplateHealthCheck(template));
    }
}
